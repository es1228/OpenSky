import { WeatherPageProps } from "../types/types";

export default function Alert({ weatherData }: WeatherPageProps) {
    const alerts = weatherData?.alerts.map((alert) => (
        <div
            key={alert.time}
            className="flex flex-col gap-2 text-black dark:text-white"
        >
            <h1 className="text-3xl text-black capitalize dark:text-white">
                {alert.title}
            </h1>
            <details>
                <summary>More Info</summary>
                <p className="text-black dark:text-white">
                    Issued: {new Date(alert.time * 1000).toLocaleString()}
                </p>
                <p className="text-black dark:text-white">
                    Ends: {new Date(alert.expires * 1000).toLocaleString()}
                </p>
                <p className="text-black dark:text-white">
                    Regions: {alert.regions.join(", ")}
                </p>
                <p className="text-black dark:text-white">
                    Severity: {alert.severity}
                </p>
                <p className="text-black dark:text-white">
                    Description: {alert.description}
                </p>
                <a href={alert.uri} className="text-blue-500 underline">
                    Source
                </a>
            </details>
        </div>
    ));
    if (alerts?.length === 0) return;
    return (
        <>
            <div className="flex flex-col gap-4 rounded-3xl bg-blue-500/20 p-4 backdrop-blur">
                {alerts}
            </div>
        </>
    );
}
