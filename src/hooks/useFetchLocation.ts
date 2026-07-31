import { useEffect, useState } from "react";
import { LatLngTuple } from "leaflet";
import { iso1A2Code } from "country-coder";

const useFetchLocation = (goToCurrently: () => void) => {
    const [location, setLocation] = useState<LatLngTuple>([51.5072, 0.1276]);
    const [country, setCountry] = useState<string>("");

    useEffect(() => {
        const fetchApproxLocation = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();
                setLocation([data.latitude, data.longitude]);
                const countryCode = iso1A2Code([data.longitude, data.latitude])?.toLowerCase();
                if (countryCode) setCountry(countryCode);
            } catch {
                console.error("Unable to fetch approx lat and lon");
            }
        };
        fetchApproxLocation();
    }, []);

    const fetchLocation = () => {
        const options = {
            enableHighAccuracy: true,
        };
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                setLocation([lat, lon]);
                setCountry(iso1A2Code([lon, lat])?.toLowerCase() ?? country);
            },
            () => console.error("Unable to get location"),
            options,
        );
        goToCurrently();
    };

    const handleLocationClick = (location: LatLngTuple) => {
        setLocation(location);
        const countryCode = iso1A2Code([
            location[1],
            location[0],
        ])?.toLowerCase();
        if (countryCode) setCountry(countryCode);
        goToCurrently();
    };

    return {location, country, handleLocationClick, fetchLocation}
};
export default useFetchLocation;
