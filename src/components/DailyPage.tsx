import DailyData from "./DailyData";
import { WeatherPageProps } from "../App";

export default function DailyPage({ weatherData, units }: WeatherPageProps) {
    if (!weatherData) return;
    const dailyItems = weatherData.daily.data.map((day) => (
        <DailyData
            key={day.time}
            time={`${new Date(day.time * 1000).toDateString()}`}
            temperatureMax={`${Math.round(day.temperatureMax)}${units[2]}`}
            temperatureMin={`${Math.round(day.temperatureMin)}${units[2]}`}
            summary={`${day.summary}`}
            humidity={`${Math.round(day.humidity * 100)}%`}
            dewPoint={`${Math.round(day.dewPoint)}${units[2]}`}
            windSpeed={`${Math.round(day.windSpeed)} ${units[3]}`}
            windGust={`${Math.round(day.windGust)} ${units[3]}`}
            windBearing={`${Math.round(day.windBearing)}°`}
            precipIntensity={`${day.precipIntensity.toFixed(2)} ${units[0]}`}
            precipAccumulation={`${day.precipAccumulation.toFixed(2)} ${units[1]}`}
            liquidAccumulation={`${day.liquidAccumulation.toFixed(2)} ${units[1]}`}
            snowAccumulation={`${day.snowAccumulation.toFixed(2)} ${units[1]}`}
            iceAccumulation={`${day.iceAccumulation.toFixed(2)} ${units[1]}`}
            cloudCover={`${Math.round(day.cloudCover * 100)}%`}
            pressure={`${Math.round(day.pressure)} ${units[4]}`}
            uvIndex={`${Math.round(day.uvIndex)}`}
            visibility={`${Math.round(day.visibility)} ${units[5]}`}
            icon={day.icon}
        />
    ));
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <h1 className="text-3xl text-black dark:text-white">Daily</h1>
                {dailyItems}
            </div>
        </>
    );
}
