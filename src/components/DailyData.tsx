type DailyDataProps = {
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
};

export default function DailyData(props: DailyDataProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                <h1>{props.time}</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div>
                            <h1 className="text-4xl">{props.temperature}</h1>
                            <p>{props.summary}</p>
                            <p>Feels: {props.apparentTemperature}</p>
                        </div>
                        <div className="ml-auto flex flex-row flex-wrap gap-4">
                            <div>
                                <p className="text-nowrap">
                                    Humidity: {props.humidity}
                                </p>
                                <p className="text-nowrap">
                                    Dew Point: {props.dewPoint}
                                </p>
                            </div>
                            <div>
                                <p className="text-nowrap">
                                    Wind Speed: {props.windSpeed}{" "}
                                    {props.windBearing}
                                </p>
                                <p className="text-nowrap">
                                    Wind Gust: {props.windGust}
                                </p>
                            </div>
                            <div>
                                <p className="text-nowrap">
                                    Precip Intensity: {props.precipIntensity}
                                </p>
                                <p className="text-nowrap">
                                    Precip Accumulation:{" "}
                                    {props.precipAccumulation}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="h-0.5 rounded-3xl border-none bg-neutral-950 dark:bg-neutral-50" />
                    <details>
                        <summary>Additional Info</summary>
                        <p>Hello</p>
                        <p>World</p>
                    </details>
                </div>
            </div>
        </>
    );
}
