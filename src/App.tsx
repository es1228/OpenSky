import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import LocationButton from "./components/LocationButton";
import CurrentCard from "./components/CurrentCard";
import InfoCard from "./components/InfoCard";
import HourlyData from "./components/HourlyData";

function CurrentlyPage() {
    return (
        <>
            <div className="mx-4 mt-20 flex flex-row flex-wrap justify-center gap-5 md:ml-60">
                <CurrentCard />
                <div className="flex w-240 flex-col flex-wrap gap-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                    <h1 className="text-lg font-bold">Highlights</h1>
                    <div className="flex flex-row flex-wrap gap-4">
                        <InfoCard
                            title="Wind"
                            icon="air"
                            summary="25 km/h NE"
                            other="Gust: 30km/h"
                        />
                        <InfoCard
                            title="UV"
                            icon="wb_sunny"
                            summary="5"
                            other="Moderate"
                        />
                        <InfoCard
                            title="Sun & Moon"
                            icon="wb_twilight"
                            summary="6:43AM - 5:30PM"
                            other="Moon: Waning Gibbous"
                        />
                        <InfoCard
                            title="Humidity"
                            icon="humidity_percentage"
                            summary="42%"
                            other="Dew Point: 3°C"
                        />
                        <InfoCard
                            title="Visibility"
                            icon="visibility"
                            summary="16.00 km"
                            other="Unlimited"
                        />
                        <InfoCard
                            title="Feels Like"
                            icon="thermostat"
                            summary="28°C"
                            other="1° Warmer"
                        />
                    </div>
                </div>
                <InfoCard
                    title="Pressure"
                    icon="speed"
                    summary="100 kPa"
                    other="Steady"
                />
                <InfoCard
                    title="Cloud Cover"
                    icon="cloud"
                    summary="8%"
                    other="Sunny"
                />
            </div>
        </>
    );
}

function HourlyPage() {
    return (
        <>
        <div className="mx-4 mt-20 flex flex-col overflow-auto gap-5 md:ml-60">
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
            <HourlyData />
        </div>
        </>
    );
}

export default function App() {
    type Pages = "Home" | "Currently" | "Hourly" | "Radar";
    const [pageType, setPageType] = useState<Pages>("Hourly");
    let content: any;

    if (pageType === "Currently") {
        content = <CurrentlyPage />;
    } else if (pageType === "Hourly") {
        content = <HourlyPage />;
    }

    return (
        <>
            <section className="header">
                <div className="fixed top-4 right-4 left-4 z-1000 flex flex-row items-center justify-between gap-4">
                    <Logo />
                    <div>
                        <Searchbar />
                    </div>
                    <div>
                        <LocationButton />
                    </div>
                </div>
            </section>
            <section className="navbar">
                <div className="fixed right-0 bottom-5 z-1000 flex w-full flex-1 justify-center md:top-20 md:left-5 md:w-48 md:justify-start">
                    <Navbar />
                </div>
                {content}
            </section>
        </>
    );
}
