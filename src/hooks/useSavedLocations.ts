import { useState } from "react";
import { SavedLocationType, WeatherDataResponseParameters } from "../types/types";
import { iso1A2Code } from "country-coder";

const useSavedLocations = (weatherData: WeatherDataResponseParameters | null) => {
    const [savedLocations, setSavedLocations] = useState<
        SavedLocationType[] | null
    >(() => {
        const saved = localStorage.getItem("savedLocations");
        return saved ? JSON.parse(saved) : null;
    });

    const handleDelete = (id: string) => {
        const updatedLocations =
            savedLocations?.filter((location) => location.id !== id) ??
            savedLocations;
        setSavedLocations(updatedLocations);
        localStorage.setItem(
            "savedLocations",
            JSON.stringify(updatedLocations),
        );
    };

    const handleAdd = () => {
        if (!weatherData) return;
        const newLocation: SavedLocationType = {
            id: `${weatherData.flags.nearestCity}, ${weatherData.flags.nearestCountry}`,
            name: `${weatherData.flags.nearestCity}, ${iso1A2Code([weatherData.longitude, weatherData.latitude])}`,
            lat: weatherData.latitude,
            lon: weatherData.longitude,
        };
        if (
            savedLocations?.some(
                (location) =>
                    location.id ===
                    `${weatherData.flags.nearestCity}, ${weatherData.flags.nearestCountry}`,
            )
        )
            return;
        const updatedLocations = savedLocations
            ? [...savedLocations, newLocation]
            : [newLocation];
        setSavedLocations(updatedLocations);
        localStorage.setItem(
            "savedLocations",
            JSON.stringify(updatedLocations),
        );
    };

    return {savedLocations, handleAdd, handleDelete}
};
export default useSavedLocations;
