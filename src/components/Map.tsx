import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import {
    MapContainer,
    TileLayer,
    WMSTileLayer,
    LayersControl,
    useMapEvents,
} from "react-leaflet";
import L from "leaflet";

type LayerTypes = "radar" | "hrrr";

type TimeSliderProps = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: number;
    max: number;
    label: string;
};

function TimeSlider({ handleChange, value, max, label }: TimeSliderProps) {
    return (
        <>
            <div className="absolute bottom-2 left-2 z-1000 rounded-3xl bg-neutral-950/30 p-4 backdrop-blur">
                <p className="text-white">Time</p>
                <input
                    type="range"
                    min={0}
                    max={max}
                    value={value}
                    onChange={handleChange}
                />
                <p className="text-white">{label}</p>
            </div>
        </>
    );
}

function Legend() {
    return (
        <>
            <div className="absolute right-2 bottom-2 z-1000 flex flex-col gap-1 rounded-3xl bg-neutral-950/30 p-4 backdrop-blur">
                <p className="text-white">Legend</p>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 rounded-full bg-green-300"></span>
                    <p className="text-white">Rain</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 rounded-full bg-blue-300"></span>
                    <p className="text-white">Snow</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 rounded-full bg-purple-300"></span>
                    <p className="text-white">Mix/Sleet</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 rounded-full bg-yellow-300"></span>
                    <p className="text-white">Hail/Rain</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 rounded-full bg-red-300"></span>
                    <p className="text-white">FRZ Rain</p>
                </div>
            </div>
        </>
    );
}

function LayerChange({
    setLayerType,
}: {
    setLayerType: (type: LayerTypes) => void;
}) {
    useMapEvents({
        baselayerchange: (e) =>
            setLayerType(e.name.toLowerCase() as LayerTypes),
    });

    return null;
}

type MapProps = {
    lat: number;
    lon: number;
};

export default function Map({ lat, lon }: MapProps) {
    const [radarTimes, setRadarTimes] = useState<string[]>([]);
    const [activeTime, setActiveTime] = useState<string>("");
    const [hrrrInitTime, setHRRRInitTime] = useState<string>("");
    const [layerType, setLayerType] = useState<LayerTypes>("radar");
    const position: LatLngTuple = [lat, lon];
    const params = {
        opacity: 0.7,
        layers: "Radar_1km_SfcPrecipType",
        format: "image/png",
        transparent: true,
        time: activeTime,
    };

    useEffect(() => {
        const fetchRadarTimes = async () => {
            if (layerType === "radar") {
                try {
                    const response = await fetch(
                        "https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&version=1.3.0&request=GetCapabilities&layers=Radar_1km_SfcPrecipType",
                    );
                    const parser = new DOMParser();
                    const document = parser.parseFromString(
                        await response.text(),
                        "application/xml",
                    );
                    const timeDimension = document.querySelector(
                        "Dimension[name=time]",
                    )?.textContent;
                    const [startTime, endTime] =
                        timeDimension?.split("/") ?? "";
                    const endTimeDate = new Date(endTime).toISOString();

                    let times = [];
                    let current = new Date(startTime);
                    while (current.toISOString() <= endTimeDate) {
                        times.push(current.toISOString().split(".")[0] + "Z");
                        current.setMinutes(current.getMinutes() + 6);
                    }

                    setRadarTimes(times);
                    setActiveTime(times[times.length - 1]);
                } catch {
                    console.error("Could not fetch radar");
                }
            } else if (layerType === "hrrr") {
                try {
                    const response = await fetch(
                        "https://mesonet.agron.iastate.edu/data/gis/images/4326/hrrr/refp_0000.json",
                    );
                    const data = await response.json();
                    const hrrrInitTime = await data.model_init_utc;
                    setHRRRInitTime(hrrrInitTime);

                    const hrrrMinutes = 1080;
                    const step = 15;
                    let times = [];
                    for (let i = 0; i < hrrrMinutes; i += step) {
                        times.push(i.toString().padStart(4, "0"));
                    }

                    setRadarTimes(times);
                    setActiveTime(times[0]);
                } catch {
                    console.error("Could not fetch hrrr init time,");
                }
            }
        };
        fetchRadarTimes();
    }, [layerType]);

    const currentTime = radarTimes.indexOf(activeTime);
    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) =>
        setActiveTime(radarTimes[parseInt(e.target.value)]);

    const controlsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (controlsRef.current) {
            L.DomEvent.disableClickPropagation(controlsRef.current);
            L.DomEvent.disableScrollPropagation(controlsRef.current);
        }
    });

    return (
        <>
            <MapContainer
                center={position}
                zoom={7}
                maxZoom={18}
                minZoom={3}
                style={{ height: "86vh", borderRadius: "20px" }}
                attributionControl={false}
            >
                <LayerChange setLayerType={setLayerType} />
                <LayersControl>
                    <LayersControl.BaseLayer
                        checked={layerType === "radar"}
                        name="Radar"
                    >
                        {activeTime && (
                            <WMSTileLayer
                                key={`radar-${activeTime}`}
                                url="https://geo.weather.gc.ca/geomet?"
                                params={params}
                            />
                        )}
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer
                        checked={layerType === "hrrr"}
                        name="HRRR"
                    >
                        {activeTime && (
                            <WMSTileLayer
                                key={`hrrr-${activeTime}`}
                                url="https://mesonet.agron.iastate.edu/cgi-bin/wms/hrrr/refp.cgi"
                                opacity={0.7}
                                layers={`refp_${activeTime}`}
                                format="image/png"
                                transparent={true}
                            />
                        )}
                    </LayersControl.BaseLayer>
                </LayersControl>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}" />
                <div ref={controlsRef}>
                    <TimeSlider
                        value={currentTime === -1 ? 0 : currentTime}
                        max={radarTimes.length - 1}
                        label={
                            layerType === "radar"
                                ? new Date(activeTime).toLocaleString()
                                : (() => {
                                      const labelTime = new Date(hrrrInitTime);
                                      labelTime.setMinutes(
                                          labelTime.getMinutes() +
                                              15 * currentTime,
                                      );
                                      return labelTime.toLocaleString();
                                  })()
                        }
                        handleChange={handleSliderChange}
                    />
                    <Legend />
                </div>
            </MapContainer>
        </>
    );
}
