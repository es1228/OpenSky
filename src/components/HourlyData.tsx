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
    icon,
}: HourlyDataProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <h1>{time}</h1>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div>
                        <img
                            src={`\\src\\assets\\${icon}.svg`}
                            alt={`${icon}`}
                            height={100}
                            width={100}
                        />
                        <h1 className="text-4xl">{temperature}</h1>
                        <p>{summary}</p>
                        <p>Feels: {apparentTemperature}</p>
                    </div>
                    <div className="ml-auto flex flex-row flex-wrap gap-4">
                        <div>
                            <p className="text-nowrap">Humidity: {humidity}</p>
                            <p className="text-nowrap">Dew Point: {dewPoint}</p>
                        </div>
                        <div>
                            <p className="text-nowrap">
                                Wind Speed: {windSpeed} @ {windBearing}
                            </p>
                            <p className="text-nowrap">
                                Wind Gust: {windGust} @ {windBearing}
                            </p>
                        </div>
                        <div>
                            <p className="text-nowrap">
                                Precip Intensity: {precipIntensity}
                            </p>
                            <p className="text-nowrap">
                                Precip Accumulation: {precipAccumulation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
