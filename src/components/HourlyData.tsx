export default function HourlyData() {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                <h1>10PM</h1>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div>
                        <h1 className="text-4xl">28°C</h1>
                        <p>Sunny</p>
                        <p>Feels: 30°C</p>
                    </div>
                    <div className="ml-auto flex flex-row gap-4 flex-wrap">
                        <div>
                            <p className="text-nowrap">Humidity: 42%</p>
                            <p className="text-nowrap">Dew Point: 3°C</p>
                        </div>
                        <div>
                            <p className="text-nowrap">Wind Speed: 25 km/h NE</p>
                            <p className="text-nowrap">Wind Gust: 30 km/h</p>
                        </div>
                        <div>
                            <p className="text-nowrap">Precip Intensity: 0 mm/h</p>
                            <p className="text-nowrap">Precip Accumulation: 0 mm</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
