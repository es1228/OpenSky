import { LatLng, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AttributionControl, MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";

export default function Map() {
    const position: LatLngTuple = [43.65, -79.38]
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
                    subdomains={['mt0','mt1','mt2','mt3']}
                />
                <WMSTileLayer
                    url="https://geo.weather.gc.ca/geomet?"
                    layers="Radar_1km_SfcPrecipType"
                    format="image/png"
                    transparent={true}
                    opacity={0.7}
                />
            </MapContainer>
        </>
    );
}
