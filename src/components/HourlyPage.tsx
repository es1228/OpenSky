import { WeatherPageProps } from "../types/types";
import HourlyData from "./HourlyData";

export default function HourlyPage({ weatherData, units }: WeatherPageProps) {
    if (!weatherData) return;
    const hourlyItems = weatherData.hourly.data.map((hour) => (
        <HourlyData
            key={hour.time}
            time={`${new Date(hour.time * 1000).toLocaleString()}`}
            temperature={`${Math.round(hour.temperature)}${units[2]}`}
            summary={`${hour.summary}`}
            apparentTemperature={`${Math.round(hour.apparentTemperature)}${units[2]}`}
            humidity={`${Math.round(hour.humidity * 100)}%`}
            dewPoint={`${Math.round(hour.dewPoint)}${units[2]}`}
            windSpeed={`${Math.round(hour.windSpeed)} ${units[3]}`}
            windGust={`${Math.round(hour.windGust)} ${units[3]}`}
            windBearing={`${Math.round(hour.windBearing)}°`}
            precipIntensity={`${hour.precipIntensity.toFixed(2)} ${units[0]}`}
            precipAccumulation={`${hour.precipAccumulation.toFixed(2)} ${units[1]}`}
            liquidAccumulation={`${hour.liquidAccumulation.toFixed(2)} ${units[1]}`}
            snowAccumulation={`${hour.snowAccumulation.toFixed(2)} ${units[1]}`}
            iceAccumulation={`${hour.iceAccumulation.toFixed(2)} ${units[1]}`}
            icon={hour.icon}
        />
    ));
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <h1 className="text-3xl text-black dark:text-white">Hourly</h1>
                {hourlyItems}
            </div>
        </>
    );
}
