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
    uvIndex: string;
    visibility: string;
    icon: string;
};

export default function DailyData({
    time,
    summary,
    temperatureMax,
    temperatureMin,
    humidity,
    dewPoint,
    windSpeed,
    windGust,
    windBearing,
    precipIntensity,
    precipAccumulation,
    cloudCover,
    pressure,
    uvIndex,
    visibility,
    icon,
}: DailyDataProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <h1 className="text-black dark:text-white">{time}</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div>
                            <img
                                src={`\\src\\assets\\${icon}.svg`}
                                alt={`${icon}`}
                                height={100}
                                width={100}
                            />
                            <p className="text-black dark:text-white">
                                {summary}
                            </p>
                            <p className="text-black dark:text-white">
                                Hi: {temperatureMax}
                            </p>
                            <p className="text-black dark:text-white">
                                Lo: {temperatureMin}
                            </p>
                        </div>
                        <div className="ml-auto flex flex-row flex-wrap gap-4">
                            <div>
                                <p className="text-nowrap text-black dark:text-white">
                                    Humidity: {humidity}
                                </p>
                                <p className="text-nowrap text-black dark:text-white">
                                    Dew Point: {dewPoint}
                                </p>
                            </div>
                            <div>
                                <p className="text-nowrap text-black dark:text-white">
                                    Wind Speed: {windSpeed} {windBearing}
                                </p>
                                <p className="text-nowrap text-black dark:text-white">
                                    Wind Gust: {windGust} {windBearing}
                                </p>
                            </div>
                            <div>
                                <p className="text-nowrap text-black dark:text-white">
                                    Precip Intensity: {precipIntensity}
                                </p>
                                <p className="text-nowrap text-black dark:text-white">
                                    Precip Accumulation: {precipAccumulation}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="h-0.5 rounded-3xl border-none bg-neutral-950 dark:bg-neutral-50" />
                    <details>
                        <summary className="text-black dark:text-white">
                            Additional Info
                        </summary>
                        <p className="text-black dark:text-white">
                            Cloud Cover: {cloudCover}
                        </p>
                        <p className="text-black dark:text-white">
                            Pressure: {pressure}
                        </p>
                        <p className="text-black dark:text-white">
                            UV: {uvIndex}
                        </p>
                        <p className="text-black dark:text-white">
                            Visibility: {visibility}
                        </p>
                    </details>
                </div>
            </div>
        </>
    );
}
