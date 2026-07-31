import { useEffect, useState } from "react";
import { WeatherDataResponseParameters } from "../types/types";
import { LatLngTuple } from "leaflet";

const useFetchWeather = (
    unitType: string,
    country: string,
    location: LatLngTuple,
    setUnits: (data: string[]) => void,
) => {
    const [weatherData, setWeatherData] =
        useState<WeatherDataResponseParameters | null>(null);

    useEffect(() => {
        const fetchWeather = async (location: LatLngTuple, units: string) => {
            try {
                if (unitType === "auto") {
                    units = country;
                    if (units !== "ca" && units !== "us" && units !== "uk")
                        units = "si";
                    if (units === "ca")
                        setUnits(["mm/h", "cm", "°C", "km/h", "hPa", "km"]);
                    else if (units === "si")
                        setUnits(["mm/h", "cm", "°C", "m/s", "hPa", "km"]);
                    else if (units === "uk")
                        setUnits(["mm/h", "cm", "°C", "mph", "hPa", "km"]);
                    else setUnits(["in/h", "in", "°F", "mph", "mbar", "mi"]);
                }
                const response = await fetch(
                    `https://pw-bridge.vercel.app/api/weather?lat=${location[0]}&long=${location[1]}&units=${units}`,
                );
                const weatherDataResponse = await response.json();
                setWeatherData(weatherDataResponse);
                console.log(weatherDataResponse);
            } catch {
                console.error("Could not fetch data");
            }
        };
        fetchWeather(location, unitType);
    }, [location, unitType]);
    return { weatherData };
};
export default useFetchWeather;
