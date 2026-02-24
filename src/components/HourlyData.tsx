type HourlyDataProps = {
    time: string;
    temperature: string;
    summary: string;
    apparentTemperature: string;
    humidity: string;
    dewPoint: string;
    windSpeed: string;
    windGust: string;
    windBearing: string;
    precipIntensity: string;
    precipAccumulation: string;
    liquidAccumulation: string;
    snowAccumulation: string;
    iceAccumulation: string;
    icon: string;
};

export default function HourlyData({
    time,
    temperature,
    summary,
    apparentTemperature,
    humidity,
    dewPoint,
    windSpeed,
    windGust,
    windBearing,
    precipIntensity,
    precipAccumulation,
    liquidAccumulation,
    snowAccumulation,
    iceAccumulation,
    icon,
}: HourlyDataProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <h1 className="text-black dark:text-white">{time}</h1>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div>
                        <img
                            src={`${icon}.svg`}
                            alt={`${icon}`}
                            height={100}
                            width={100}
                        />
                        <h1 className="text-4xl text-black dark:text-white">
                            {temperature}
                        </h1>
                        <p className="text-black dark:text-white">{summary}</p>
                        <p className="text-black dark:text-white">
                            Feels: {apparentTemperature}
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
                            <p className="text-nowrap text-black dark:text-white">
                                Rain Accumulation: {liquidAccumulation}
                            </p>
                        </div>
                        <div>
                            <p className="text-nowrap text-black dark:text-white">
                                Wind Speed: {windSpeed} @ {windBearing}
                            </p>
                            <p className="text-nowrap text-black dark:text-white">
                                Wind Gust: {windGust} @ {windBearing}
                            </p>
                            <p className="text-nowrap text-black dark:text-white">
                                Snow Accumulation: {snowAccumulation}
                            </p>
                        </div>
                        <div>
                            <p className="text-nowrap text-black dark:text-white">
                                Precip Intensity: {precipIntensity}
                            </p>
                            <p className="text-nowrap text-black dark:text-white">
                                Precip Accumulation: {precipAccumulation}
                            </p>
                            <p className="text-nowrap text-black dark:text-white">
                                Ice Accumulation: {iceAccumulation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
