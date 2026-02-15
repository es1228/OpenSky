type DailyDataProps = {
    time: string;
    summary: string;
    temperatureMax: string;
    temperatureMin: string;
    humidity: string;
    dewPoint: string;
    windSpeed: string;
    windGust: string;
    windBearing: string;
    precipIntensity: string;
    precipAccumulation: string;
    cloudCover: string;
    pressure: string;
    uv: string;
    visibility: string;
};

export default function DailyData({time, summary, temperatureMax, temperatureMin, humidity, dewPoint, windSpeed, windGust, windBearing, precipIntensity, precipAccumulation, cloudCover, pressure, uv, visibility}: DailyDataProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <h1>{time}</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div>
                            <p>{summary}</p>
                            <p>Hi: {temperatureMax}</p>
                            <p>Lo: {temperatureMin}</p>
                        </div>
                        <div className="ml-auto flex flex-row flex-wrap gap-4">
                            <div>
                                <p className="text-nowrap">
                                    Humidity: {humidity}
                                </p>
                                <p className="text-nowrap">
                                    Dew Point: {dewPoint}
                                </p>
                            </div>
                            <div>
                                <p className="text-nowrap">
                                    Wind Speed: {windSpeed}{" "}
                                    {windBearing}
                                </p>
                                <p className="text-nowrap">
                                    Wind Gust: {windGust}
                                </p>
                            </div>
                            <div>
                                <p className="text-nowrap">
                                    Precip Intensity: {precipIntensity}
                                </p>
                                <p className="text-nowrap">
                                    Precip Accumulation:{" "}
                                    {precipAccumulation}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="h-0.5 rounded-3xl border-none bg-neutral-950 dark:bg-neutral-50" />
                    <details>
                        <summary>Additional Info</summary>
                        <p>Cloud Cover: {cloudCover}</p>
                        <p>Pressure: {pressure}</p>
                        <p>UV: {uv}</p>
                        <p>Visibility: {visibility}</p>
                    </details>
                </div>
            </div>
        </>
    );
}
