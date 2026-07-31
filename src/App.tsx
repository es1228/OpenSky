import { useState, ChangeEvent } from "react";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import HomePage from "./components/HomePage";
import CurrentlyPage from "./components/CurrentlyPage";
import HourlyPage from "./components/HourlyPage";
import DailyPage from "./components/DailyPage";
import Map from "./components/Map";
import SettingsPage from "./components/SettingsPage";
import Alert from "./components/Alert";
import {
    Page,
} from "./types/types";
import useFetchWeather from "./hooks/useFetchWeather";
import useFetchLocation from "./hooks/useFetchLocation";
import useSavedLocations from "./hooks/useSavedLocations";
import useSearch from "./hooks/useSearch";
import useTheme from "./hooks/useTheme";
import useUnits from "./hooks/useUnits";

export default function App() {
    let content: any;
    const [pageType, setPageType] = useState<Page>("Home");

    const {theme, handleThemeChange} = useTheme();

    const {units, setUnits, unitType, handleUnitChange} = useUnits();

    const {location, country, handleLocationClick, fetchLocation} = useFetchLocation(() => setPageType("Currently"))

    const { weatherData } = useFetchWeather(
        unitType,
        country,
        location,
        setUnits
    );

    const {items, handleFocus, handleBlur, handleSearch} = useSearch(handleLocationClick)
    const {savedLocations, handleAdd, handleDelete} = useSavedLocations(weatherData);

    if (pageType === "Home")
        content = (
            <HomePage
                savedLocations={savedLocations}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
                handleClick={(lat: number, lon: number) =>
                    handleLocationClick([lat, lon])
                }
                weatherData={weatherData}
                unitType={unitType}
            />
        );
    else if (pageType === "Currently")
        content = <CurrentlyPage weatherData={weatherData} units={units} />;
    else if (pageType === "Hourly")
        content = <HourlyPage weatherData={weatherData} units={units} />;
    else if (pageType === "Daily")
        content = <DailyPage weatherData={weatherData} units={units} />;
    else if (pageType === "Radar")
        content = (
            <Map
                lat={weatherData?.latitude ?? 51.5072}
                lon={weatherData?.longitude ?? 0.1276}
            />
        );
    else if (pageType === "Settings")
        content = (
            <SettingsPage
                handleUnitChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleUnitChange(e.target.value)
                }
                handleThemeChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleThemeChange(e.target.value)
                }
                unitType={unitType}
                theme={theme}
            />
        );

    return (
        <>
            <section className="header">
                <div className="fixed top-4 right-4 left-4 z-1000 flex flex-row items-center justify-between gap-4">
                    <Logo />
                    <div>
                        <Searchbar
                            handleChange={handleSearch}
                            handleBlur={handleBlur}
                            handleFocus={handleFocus}
                        />
                    </div>
                    <div>
                        <Button
                            handleClick={fetchLocation}
                            icon="my_location"
                            text="Current Location"
                        />
                    </div>
                </div>
            </section>
            <div className="fixed left-1/2 z-10000 w-[95vw] -translate-x-1/2 rounded-3xl bg-neutral-50/60 backdrop-blur md:w-md dark:bg-neutral-950/60">
                {items}
            </div>
            <section className="navbar">
                <div className="fixed right-0 bottom-5 z-10000 flex w-full flex-1 justify-center md:top-20 md:left-5 md:w-48 md:justify-start">
                    <Navbar
                        handlePageChange={(p: Page) => setPageType(p)}
                        pageType={pageType}
                    />
                </div>
                <div className="mx-4 mt-20 flex flex-col gap-4 md:ml-60">
                    {!(pageType === "Radar" || pageType === "Settings") && (
                        <Alert weatherData={weatherData} units={units} />
                    )}
                    {content}
                </div>
            </section>
            <section className="footer">
                <div className="m-4 mb-30 md:mb-4 md:ml-60">
                    <p className="text-center text-xs text-black dark:text-white">
                        Powered by PirateWeather{" "}
                        {weatherData?.flags.version ?? ""}, Maps © Leaflet,
                        Basemap © Esri, Radar Data © ECCC, NOAA, NWS
                    </p>
                </div>
            </section>
        </>
    );
}
