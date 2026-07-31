import { useEffect, useState } from "react";
import { iso1A2Code } from "country-coder";
import Button from "./Button";
import { WeatherDataResponseParameters } from "../types/types";

type SavedLocationProps = {
    name: string;
    lat: number;
    lon: number;
    unitType: string;
    onDelete: () => void;
    onClick: () => void;
};

export default function SavedLocation({
    name,
    lat,
    lon,
    unitType,
    onDelete,
    onClick,
}: SavedLocationProps) {
    const [weatherData, setWeatherData] =
        useState<WeatherDataResponseParameters | null>(null);
    const [tempUnits, setTempUnits] = useState<string>();
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (unitType === "auto") {
                    let units = iso1A2Code([lon, lat])?.toLowerCase();
                    if (units !== "us") setTempUnits("°C");
                    else setTempUnits("°F");
                } else if (unitType !== "us") setTempUnits("°C");
                else setTempUnits("°F");
                const response = await fetch(
                    `https://pw-bridge.vercel.app/api/weather?lat=${lat}&long=${lon}&units=${unitType}`,
                );
                const weatherDataResponse: WeatherDataResponseParameters =
                    await response.json();
                setWeatherData(weatherDataResponse);
                console.log(weatherData);
            } catch {
                console.error("Could not fetch data");
            }
        };
        fetchWeather();
    }, [lat, lon, unitType]);
    if (!weatherData) return;
    return (
        <>
            <div
                className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40"
                onClick={onClick}
            >
                <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center gap-4">
                        <img
                            src={`${weatherData.currently.icon}.svg`}
                            alt={`${weatherData.currently.icon}`}
                            className="h-10 w-10"
                        />
                        <h1 className="text-2xl text-black md:text-4xl dark:text-white">
                            {Math.round(weatherData.currently.temperature)}
                            {tempUnits}
                        </h1>
                        <div>
                            <h1 className="text-black md:text-2xl dark:text-white">
                                {name}
                            </h1>
                            <p className="text-black dark:text-white">
                                {weatherData.currently.summary}
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Button
                            handleClick={onDelete}
                            icon="delete"
                            text="Delete"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
