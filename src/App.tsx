import { useState } from "react";
import "./App.css";

import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import LocationButton from "./components/LocationButton";
import CurrentCard from "./components/CurrentCard";
import InfoCard from "./components/InfoCard";
import HourlyData from "./components/HourlyData";
import DailyData from "./components/DailyData";
import SavedLocation from "./components/SavedLocation";
import Map from "./components/Map";

type Page = "Home" | "Currently" | "Hourly" | "Daily" | "Radar" | "Settings";

type NavbarProps = {
    handlePageChange: (p: Page) => void;
};

function Navbar({ handlePageChange }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-col rounded-3xl bg-neutral-50/30 p-4 backdrop-blur md:pr-18 dark:bg-neutral-950/30">
                <ul className="flex flex-1 flex-row justify-center gap-4 md:flex-col">
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Home")}
                    >
                        <span className="material-symbols-rounded">home</span>
                        <p className="text-xs md:text-lg">Home</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Currently")}
                    >
                        <span className="material-symbols-rounded">
                            schedule
                        </span>
                        <p className="text-xs md:text-lg">Currently</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Hourly")}
                    >
                        <span className="material-symbols-rounded">
                            calendar_clock
                        </span>
                        <p className="text-xs md:text-lg">Hourly</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Daily")}
                    >
                        <span className="material-symbols-rounded">
                            calendar_view_week
                        </span>
                        <p className="text-xs md:text-lg">Daily</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:flex-row"
                        onClick={() => handlePageChange("Radar")}
                    >
                        <span className="material-symbols-rounded">radar</span>
                        <p className="text-xs md:text-lg">Radar</p>
                    </li>
                    <li
                        className="flex flex-col items-center gap-2 md:mt-auto md:flex-row"
                        onClick={() => handlePageChange("Settings")}
                    >
                        <span className="material-symbols-rounded">
                            settings
                        </span>
                        <p className="text-xs md:text-lg">Settings</p>
                    </li>
                </ul>
            </nav>
        </>
    );
}

function HomePage() {
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <SavedLocation
                    city="Miami"
                    summary="Clear"
                    temperature="21°C"
                />
            </div>
        </>
    );
}

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
                <InfoCard
                    title="Rain Accumulation"
                    icon="rainy"
                    summary="0 mm"
                    other="No Rain Expected Today"
                />
                <InfoCard
                    title="Snow Accumulation"
                    icon="weather_snowy"
                    summary="0 mm"
                    other="No Snow Expected Today"
                />
                <InfoCard
                    title="Ice Accumulation"
                    icon="weather_hail"
                    summary="0 mm"
                    other="No Ice Expected Today"
                />
                <InfoCard
                    title="CAPE"
                    icon="thunderstorm"
                    summary="0"
                    other="No Thunderstorms Expected Today"
                />
            </div>
        </>
    );
}

function HourlyPage() {
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <HourlyData
                    time="10 PM"
                    temperature="25°C"
                    summary="Sunny"
                    apparentTemperature="27°C"
                    humidity="42%"
                    dewPoint="3°C"
                    windSpeed="20 km/h"
                    windGust="25 km/h"
                    windBearing="270°"
                    precipIntensity="0"
                    precipAccumulation="0"
                />
            </div>
        </>
    );
}

function DailyPage() {
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <DailyData
                    time="Fri, Feb 13"
                    temperature="25°C"
                    summary="Sunny"
                    apparentTemperature="27°C"
                    humidity="42%"
                    dewPoint="3°C"
                    windSpeed="20 km/h"
                    windGust="25 km/h"
                    windBearing="270°"
                    precipIntensity="0"
                    precipAccumulation="0"
                />
            </div>
        </>
    );
}

function RadarPage() {
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <Map />
            </div>
        </>
    );
}

export default function App() {
    let content: any;
    const [pageType, setPageType] = useState<Page>("Radar");

    if (pageType === "Home") content = <HomePage />;
    else if (pageType === "Currently") {
        content = <CurrentlyPage />;
    } else if (pageType === "Hourly") {
        content = <HourlyPage />;
    } else if (pageType === "Daily") content = <DailyPage />;
    else if (pageType === "Radar") content = <RadarPage />;

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
                <div className="fixed right-0 bottom-5 z-10000 flex w-full flex-1 justify-center md:top-20 md:left-5 md:w-48 md:justify-start">
                    <Navbar handlePageChange={(p: Page) => setPageType(p)} />
                </div>
                {content}
            </section>
            <div className="m-4 mb-30 md:mb-4">
                <Footer />
            </div>
        </>
    );
}
