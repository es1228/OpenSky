import CurrentCard from "./CurrentCard";
import InfoCard from "./InfoCard";
import { WeatherPageProps } from "../App";

export default function CurrentlyPage({
    weatherData,
    units,
}: WeatherPageProps) {
    if (!weatherData) return;

    const uvSummary = (uv: number) => {
        if (uv <= 2) return "Low";
        else if (uv >= 3 && uv <= 5) return "Moderate";
        else if (uv >= 6 && uv <= 7) return "High";
        else if (uv >= 8 && uv <= 10) return "Very High";
        return "Extreme";
    };

    const cloudSummary = (cloudCover: number) => {
        if (cloudCover <= 0.3) return "Low";
        else if (cloudCover > 0.3 && cloudCover < 0.7) return "Moderate";
        return "High";
    };

    const visibilitySummary = (visibility: number) => {
        if (units[5] === "mi") {
            if (visibility >= 6) return "Good";
            if (visibility >= 2 && visibility < 6) return "Moderate";
            if (visibility >= 0.5 && visibility < 2) return "Poor";
            if (visibility < 0.5) return "Very Poor";
        } else {
            if (visibility >= 10) return "Good";
            if (visibility >= 4 && visibility < 10) return "Moderate";
            if (visibility >= 1 && visibility < 4) return "Poor";
            if (visibility < 1) return "Very Poor";
        }
    };

    return (
        <>
            <div className="flex flex-row flex-wrap justify-center gap-5">
                <CurrentCard
                    temperature={`${Math.round(weatherData.currently.temperature)}${units[2]}`}
                    summary={weatherData.currently.summary}
                    date={new Date(
                        weatherData.currently.time * 1000,
                    ).toLocaleDateString()}
                    location={`${weatherData.flags.nearestCity}, ${weatherData.flags.nearestSubNational}, ${weatherData.flags.nearestCountry}`}
                    icon={weatherData.currently.icon}
                />
                <div className="flex w-240 flex-col flex-wrap gap-2 rounded-3xl bg-neutral-400/20 p-4 dark:bg-neutral-800/40">
                    <h1 className="text-lg font-bold text-black dark:text-white">
                        Highlights
                    </h1>
                    <div className="flex flex-row flex-wrap gap-3">
                        <InfoCard
                            title="Wind"
                            icon="air"
                            summary={`${Math.round(weatherData.currently.windSpeed)} ${units[3]} @ ${weatherData.currently.windBearing}°`}
                            other={`Gust: ${Math.round(weatherData.currently.windGust)} ${units[3]} @ ${weatherData.currently.windBearing}°`}
                        />
                        <InfoCard
                            title="UV"
                            icon="wb_sunny"
                            summary={`${Math.round(weatherData.currently.uvIndex)}`}
                            other={`${uvSummary(Math.round(weatherData.currently.uvIndex))}`}
                        />
                        <InfoCard
                            title="Cloud Cover"
                            icon="cloud"
                            summary={`${Math.round(weatherData.currently.cloudCover * 100)}%`}
                            other={`${cloudSummary(weatherData.currently.cloudCover)}`}
                        />
                        <InfoCard
                            title="Humidity"
                            icon="humidity_percentage"
                            summary={`${Math.round(weatherData.currently.humidity * 100)}%`}
                            other={`Dew Point: ${Math.round(weatherData.currently.dewPoint)}${units[2]}`}
                        />
                        <InfoCard
                            title="Visibility"
                            icon="visibility"
                            summary={`${Math.round(weatherData.currently.visibility)} ${units[5]}`}
                            other={`${visibilitySummary(weatherData.currently.visibility)}`}
                        />
                        <InfoCard
                            title="Feels Like"
                            icon="thermostat"
                            summary={`${Math.round(weatherData.currently.apparentTemperature)}${units[2]}`}
                            other={`${Math.round(weatherData.currently.apparentTemperature) - Math.round(weatherData.currently.temperature)} From Actual`}
                        />
                    </div>
                </div>
                <InfoCard
                    title="Pressure"
                    icon="speed"
                    summary={`${Math.round(weatherData.currently.pressure)} ${units[4]}`}
                    other={`${Math.round(weatherData.currently.pressure) - 1013} From MSL`}
                />
                <InfoCard
                    title="Rain Accumulation"
                    icon="rainy"
                    summary={`${Math.round(weatherData.currently.currentDayLiquid)} ${units[1]}`}
                    other={`${Math.max(0, Math.round(weatherData.daily.data[0].liquidAccumulation) - Math.round(weatherData.currently.currentDayLiquid))} ${units[1]} More Expected`}
                />
                <InfoCard
                    title="Snow Accumulation"
                    icon="weather_snowy"
                    summary={`${Math.round(weatherData.currently.currentDaySnow)} ${units[1]}`}
                    other={`${Math.max(0, Math.round(weatherData.daily.data[0].snowAccumulation) - Math.round(weatherData.currently.currentDaySnow))} ${units[1]} More Expected`}
                />
                <InfoCard
                    title="Ice Accumulation"
                    icon="weather_hail"
                    summary={`${Math.round(weatherData.currently.currentDayIce)} ${units[1]}`}
                    other={`${Math.max(0, Math.round(weatherData.daily.data[0].iceAccumulation) - Math.round(weatherData.currently.currentDayIce))} ${units[1]} More Expected`}
                />
            </div>
        </>
    );
}
