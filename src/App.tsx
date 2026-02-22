import { useState, useEffect, ChangeEvent } from "react";
import { iso1A2Code } from "country-coder";
import "./App.css";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import LocationButton from "./components/LocationButton";
import HomePage from "./components/HomePage";
import CurrentlyPage from "./components/CurrentlyPage";
import HourlyPage from "./components/HourlyPage";
import DailyPage from "./components/DailyPage";
import Map from "./components/Map";
import SettingsPage from "./components/SettingsPage";
import Alert from "./components/Alert";

type WeatherDataResponseParameters = {
    alerts: Array<{
        description: string;
        expires: number;
        regions: Array<string>
        severity: string;
        time: number;
        title: string;
        uri: string;
    }>;
    currently: {
        apparentTemperature: number;
        cape: number;
        cloudCover: number;
        currentDayIce: number;
        currentDayLiquid: number;
        currentDaySnow: number;
        dewPoint: number;
        feelsLike: number;
        fireIndex: number;
        humidity: number;
        iceIntensity: number;
        icon: string;
        nearestStormBearing: number;
        nearestStormDistance: number;
        ozone: number;
        precipIntensity: number;
        precipIntensityError: number;
        precipProbability: number;
        precipType: string;
        pressure: number;
        rainIntensity: number;
        smoke: number;
        snowIntensity: number;
        solar: number;
        summary: string;
        temperature: number;
        time: number;
        uvIndex: number;
        visibility: number;
        windBearing: number;
        windGust: number;
        windSpeed: number;
    };
    daily: {
        data: Array<{
            apparentTemperatureHigh: number;
            apparentTemperatureHighTime: number;
            apparentTemperatureLow: number;
            apparentTemperatureLowTime: number;
            apparentTemperatureMax: number;
            apparentTemperatureMaxTime: number;
            apparentTemperatureMin: number;
            apparentTemperatureMinTime: number;
            capeMax: number;
            capeMaxTime: number;
            cloudCover: number;
            dawnTime: number;
            dewPoint: number;
            duskTime: number;
            fireIndexMax: number;
            fireIndexMaxTime: number;
            humidity: number;
            iceAccumulation: number;
            iceIntensity: number;
            iceIntensityMax: number;
            icon: string;
            liquidAccumulation: number;
            moonPhase: number;
            precipAccumulation: number;
            precipIntensity: number;
            precipIntensityMax: number;
            precipIntensityMaxTime: number;
            precipProbability: number;
            precipType: string;
            pressure: number;
            rainIntensity: number;
            rainIntensityMax: number;
            smokeMax: number;
            smokeMaxTime: number;
            snowAccumulation: number;
            snowIntensity: number;
            snowIntensityMax: number;
            solarMax: number;
            solarMaxTime: number;
            summary: string;
            sunriseTime: number;
            sunsetTime: number;
            temperatureHigh: number;
            temperatureHighTime: number;
            temperatureLow: number;
            temperatureLowTime: number;
            temperatureMax: number;
            temperatureMaxTime: number;
            temperatureMin: number;
            temperatureMinTime: number;
            time: number;
            uvIndex: number;
            uvIndexTime: number;
            visibility: number;
            windBearing: number;
            windGust: number;
            windGustTime: number;
            windSpeed: number;
        }>;
        icon: string;
        summary: string;
    };
    elevation: number;
    flags: {
        nearestCity: string;
        nearestCountry: string;
        nearestSubNational: string;
        version: number;
    };
    hourly: {
        data: Array<{
            apparentTemperature: number;
            cape: number;
            cloudCover: number;
            dewPoint: number;
            feelsLike: number;
            fireIndex: number;
            humidity: number;
            iceAccumulation: number;
            iceIntensity: number;
            icon: string;
            liquidAccumulation: number;
            nearestStormBearing: number;
            nearestStormDistance: number;
            ozone: number;
            precipAccumulation: number;
            precipIntensity: number;
            precipIntensityError: number;
            precipProbability: number;
            precipType: string;
            pressure: number;
            rainIntensity: number;
            smoke: number;
            snowAccumulation: number;
            snowIntensity: number;
            solar: number;
            summary: string;
            temperature: number;
            time: number;
            uvIndex: number;
            visibility: number;
            windBearing: number;
            windGust: number;
            windSpeed: number;
        }>;
        icon: string;
        summary: string;
    };
    latitude: number;
    longitude: number;
    offset: number;
    timezone: string;
};

type PhotonResponse = {
    features: Array<{
        properties: {
            name: string;
            country: string;
            state: string;
            osm_id: number;
        };
        geometry: {
            coordinates: number[];
        };
    }>;
};

type PhotonFeature = {
    properties: {
        name: string;
        country: string;
        state: string;
        osm_id: number;
    };
    geometry: {
        coordinates: number[];
    };
};

export type Page =
    | "Home"
    | "Currently"
    | "Hourly"
    | "Daily"
    | "Radar"
    | "Settings";

export type WeatherPageProps = {
    weatherData: WeatherDataResponseParameters | null;
    units: string[];
};

export default function App() {
    let content: any;
    const [pageType, setPageType] = useState<Page>("Home");
    const [weatherData, setWeatherData] =
        useState<WeatherDataResponseParameters | null>(null);
    const [location, setLocation] = useState<number[]>([51.5072, 0.1276]);
    const [country, setCountry] = useState<string>("");
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") || "system",
    );
    const [unitType, setunitType] = useState<string>(
        localStorage.getItem("unitType") || "auto",
    );
    const [units, setUnits] = useState<string[]>([
        "mm/h",
        "cm",
        "°C",
        "m/s",
        "hPa",
        "km",
    ]);
    const [locations, setLocations] = useState<PhotonFeature[] | null>(null);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        const fetchApproxLocation = async () => {
            try {
                const response = await fetch("https://ipinfo.io/json");
                const data = await response.json();
                const [lat, lon] = await data.loc.split(",");
                setLocation([lat, lon]);
                const countryCode = iso1A2Code([lon, lat])?.toLowerCase();
                if (countryCode) setCountry(countryCode);
            } catch {
                console.error("Unable to fetch approx lat and lon");
            }
        };
        fetchApproxLocation();
    }, []);

    const fetchLocation = () => {
        const options = {
            enableHighAccuracy: true,
        };
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                setLocation([lat, lon]);
            },
            () => console.error("Unable to get location"),
            options,
        );
    };

    useEffect(() => {
        const changeTheme = () => {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            if (theme === "system")
                if (window.matchMedia("(prefers-color-scheme: dark)").matches)
                    root.classList.add("dark");
                else root.classList.add("light");
            else root.classList.add(theme);
            localStorage.setItem("theme", theme);
        };
        changeTheme();
    }, [theme]);

    useEffect(() => {
        const fetchWeather = async (location: number[], units: string) => {
            try {
                if (unitType === "auto") {
                    units = country;
                    if (units !== "ca" && units !== "us" && units !== "uk")
                        units = "si";
                    if (units === "ca")
                        setUnits(["mm/h", "cm", "°C", "km/h", "hPa", "km"]);
                    else if (units === "si")
                        setUnits(["mm/h", "cm", "°C", "m/s", "hPa", "km"]);
                    else if (units === "uk")
                        setUnits(["mm/h", "cm", "°C", "mph", "hPa", "km"]);
                    else setUnits(["in/h", "in", "°F", "mph", "mbar", "mi"]);
                }
                const response = await fetch(
                    `https://pw-bridge.vercel.app/api/weather?lat=${location[0]}&long=${location[1]}&units=${units}`,
                );
                const weatherDataResponse = await response.json();
                setWeatherData(weatherDataResponse);
                console.log(weatherDataResponse);
            } catch {
                console.error("Could not fetch data");
            }
        };
        fetchWeather(location, unitType);
    }, [location, unitType]);

    useEffect(() => {
        const onUnitChange = () => {
            if (unitType === "ca")
                setUnits(["mm/h", "cm", "°C", "km/h", "hPa", "km"]);
            else if (unitType === "si")
                setUnits(["mm/h", "cm", "°C", "m/s", "hPa", "km"]);
            else if (unitType === "uk")
                setUnits(["mm/h", "cm", "°C", "mph", "hPa", "km"]);
            else setUnits(["in/h", "in", "°F", "mph", "mbar", "mi"]);
            localStorage.setItem("unitType", unitType);
        };
        onUnitChange();
    }, [unitType]);

    const handleUnitChange = (value: string) => setunitType(value);
    const handleThemeChange = (value: string) => setTheme(value);
    const handleLocationClick = (location: number[]) => {
        setLocation(location);
        const countryCode = iso1A2Code([
            location[1],
            location[0],
        ])?.toLowerCase();
        if (countryCode) setCountry(countryCode);
    };
    const handleBlur = () => setLocations(null);
    const handleFocus = () => fetchLocations(query);

    useEffect(() => {
        if (query.length >= 3) {
            const timer = setTimeout(() => {
                fetchLocations(query);
            }, 250)
            return () => clearTimeout(timer);
        } else setLocations(null)
    }, [query])

    const fetchLocations = async (value: string) => {
        try {
            const response = await fetch(
                `https://photon.komoot.io/api/?q=${encodeURIComponent(value)}`,
            );
            const data: PhotonResponse = await response.json();
            setLocations(data.features.slice(0, 5));
        } catch {
            console.error("Could not search location");
        }
    };

    const items = locations?.map((features) => (
        <li
            onMouseDown={() =>
                handleLocationClick([
                    features.geometry.coordinates[1],
                    features.geometry.coordinates[0],
                ])
            }
            className="list-none p-3 first-of-type:rounded-t-3xl last-of-type:rounded-b-3xl hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
        >
            <div
                key={features.properties.osm_id}
                className="flex flex-row gap-1"
            >
                <span className="material-symbols-rounded text-black dark:text-white">
                    location_on
                </span>
                <p className="text-black dark:text-white">
                    {features.properties.name
                        ? `${features.properties.name},`
                        : ""}{" "}
                    {features.properties.state
                        ? `${features.properties.state},`
                        : ""}{" "}
                    {features.properties.country
                        ? `${features.properties.country}`
                        : ""}
                </p>
            </div>
        </li>
    ));

    if (pageType === "Home") content = <HomePage />;
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
                            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setQuery(e.target.value)
                            }
                            handleBlur={handleBlur}
                            handleFocus={handleFocus}
                        />
                    </div>
                    <div>
                        <LocationButton handleClick={fetchLocation} />
                    </div>
                </div>
            </section>
            <div className="fixed left-1/2 z-10000 w-[95vw] -translate-x-1/2 rounded-3xl bg-neutral-50/60 backdrop-blur md:w-md dark:bg-neutral-950/60">
                {items}
            </div>
            <section className="navbar">
                <div className="fixed right-0 bottom-5 z-10000 flex w-full flex-1 justify-center md:top-20 md:left-5 md:w-48 md:justify-start">
                    <Navbar handlePageChange={(p: Page) => setPageType(p)} />
                </div>
                <div className="mx-4 mt-20 flex flex-col gap-4 md:ml-60">
                    <Alert weatherData={weatherData} units={units} />
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
