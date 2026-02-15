import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, ChangeEventHandler, ChangeEvent } from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";

type TimeSliderProps = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: number;
    max: number;
    label: string;
};

function TimeSlider({ handleChange, value, max, label }: TimeSliderProps) {
    return (
        <>
            <div className="absolute mt-2 right-6 md:bottom-10 z-10000 ml-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                <p>Time</p>
                <input
                    type="range"
                    min={0}
                    max={max}
                    value={value}
                    onChange={handleChange}
                />
                <p>{label}</p>
            </div>
        </>
    );
}

function Legend() {
    return (
        <>
            <div className="absolute bottom-30 md:bottom-40 right-6 z-10000 ml-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                <p>Legend</p>
                <div className="flex items-center gap-2"><span className="bg-green-300 rounded-full w-4 h-4 inline-block"></span>Rain</div>
                <div className="flex items-center gap-2"><span className="bg-blue-300 rounded-full w-4 h-4 inline-block"></span>Snow</div>
                <div className="flex items-center gap-2"><span className="bg-purple-300 rounded-full w-4 h-4 inline-block"></span>Mixed</div>
                <div className="flex items-center gap-2"><span className="bg-yellow-300 rounded-full w-4 h-4 inline-block"></span>Hail/Rain</div>
                <div className="flex items-center gap-2"><span className="bg-red-300 rounded-full w-4 h-4 inline-block"></span>Frz Rain</div>
            </div>
        </>
    );
}

export default function Map() {
    const [radarTimes, setRadarTimes] = useState<string[]>([]);
    const [activeTime, setActiveTime] = useState<string>("");
    const position: LatLngTuple = [43.65, -79.38];
    const currentTime = radarTimes.indexOf(activeTime);
    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) =>
        setActiveTime(radarTimes[parseInt(e.target.value)]);

    useEffect(() => {
        const fetchRadarTimes = async () => {
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
                const [startTime, endTime] = timeDimension?.split("/") ?? "";
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
        };
        fetchRadarTimes();
    }, []);
    return (
        <>
            <MapContainer
                center={position}
                zoom={7}
                style={{ height: "86vh", borderRadius: "20px" }}
                attributionControl={false}
            >
                <TileLayer
                    url="http://{s}.google.com/vt?lyrs=s,m&x={x}&y={y}&z={z}"
                    subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />
                {activeTime != null ? (
                    <WMSTileLayer
                        key={activeTime}
                        url="https://geo.weather.gc.ca/geomet?"
                        params={
                            {
                                opacity: 0.7,
                                layers: "Radar_1km_SfcPrecipType",
                                format: "image/png",
                                transparent: true,
                                time: activeTime,
                            } as any
                        }
                    />
                ) : (
                    ""
                )}
            </MapContainer>
            <TimeSlider
                value={currentTime === -1 ? 0 : currentTime}
                max={radarTimes.length - 1}
                label={new Date(activeTime).toLocaleString()}
                handleChange={handleSliderChange}
            />
            <Legend/>
        </>
    );
}
