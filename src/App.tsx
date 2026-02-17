import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";

import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import LocationButton from "./components/LocationButton";
import CurrentCard from "./components/CurrentCard";
import InfoCard from "./components/InfoCard";
import HourlyData from "./components/HourlyData";
import DailyData from "./components/DailyData";
import SavedLocation from "./components/SavedLocation";
import Map from "./components/Map";

type weatherDataResponseParameters = {
    alerts: [];
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

type Page = "Home" | "Currently" | "Hourly" | "Daily" | "Radar" | "Settings";

type NavbarProps = {
    handlePageChange: (p: Page) => void;
};

function Navbar({ handlePageChange }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-col rounded-3xl bg-neutral-400/20 p-4 backdrop-blur md:pr-18 dark:bg-neutral-800/40">
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
                <h1 className="text-3xl">Saved Locations</h1>
                <SavedLocation
                    city="Toronto"
                    summary="Overcast"
                    temperature="0°C"
                />
            </div>
        </>
    );
}

type WeatherPageProps = {
    weatherData: weatherDataResponseParameters | null;
    units: string[];
};

function CurrentlyPage({ weatherData, units }: WeatherPageProps) {
    if (!weatherData) return;
    return (
        <>
            <div className="mx-4 mt-20 flex flex-row flex-wrap justify-center gap-5 md:ml-60">
                <CurrentCard
                    temperature={`${Math.round(weatherData.currently.temperature)}${units[2]}`}
                    summary={weatherData.currently.summary}
                    date={new Date(
                        weatherData.currently.time * 1000,
                    ).toLocaleDateString()}
                    location={`${weatherData.flags.nearestCity}, ${weatherData.flags.nearestCountry}`}
                />
                <div className="flex w-240 flex-col flex-wrap gap-2 rounded-3xl bg-neutral-400/20 p-4 dark:bg-neutral-800/40">
                    <h1 className="text-lg font-bold">Highlights</h1>
                    <div className="flex flex-row flex-wrap gap-3">
                        <InfoCard
                            title="Wind"
                            icon="air"
                            summary={`${Math.round(weatherData.currently.windSpeed)} ${units[3]} @ ${weatherData.currently.windBearing}°`}
                            other={`Gust: ${Math.round(weatherData.currently.windGust)} ${units[3]} @ ${weatherData.currently.windBearing}°`}
                        />
                        <InfoCard
                            title="UV"
                            icon="wb_sunny"
                            summary={`${Math.round(weatherData.currently.uvIndex)}`}
                            other="Low"
                        />
                        <InfoCard
                            title="Cloud Cover"
                            icon="cloud"
                            summary={`${Math.round(weatherData.currently.cloudCover * 100)}%`}
                            other="High"
                        />
                        <InfoCard
                            title="Humidity"
                            icon="humidity_percentage"
                            summary={`${Math.round(weatherData.currently.humidity * 100)}%`}
                            other={`Dew Point: ${Math.round(weatherData.currently.dewPoint)}${units[2]}`}
                        />
                        <InfoCard
                            title="Visibility"
                            icon="visibility"
                            summary={`${Math.round(weatherData.currently.visibility)} ${units[5]}`}
                            other="Unlimited"
                        />
                        <InfoCard
                            title="Feels Like"
                            icon="thermostat"
                            summary={`${Math.round(weatherData.currently.apparentTemperature)}${units[2]}`}
                            other={`${Math.round(weatherData.currently.apparentTemperature) - Math.round(weatherData.currently.temperature)} From Actual`}
                        />
                    </div>
                </div>
                <InfoCard
                    title="Pressure"
                    icon="speed"
                    summary={`${Math.round(weatherData.currently.pressure)} ${units[4]}`}
                    other="Steady"
                />
                <InfoCard
                    title="Rain Accumulation"
                    icon="rainy"
                    summary={`${Math.round(weatherData.currently.currentDayLiquid)} ${units[1]}`}
                    other={`${Math.max(0, Math.round(weatherData.daily.data[0].liquidAccumulation) - Math.round(weatherData.currently.currentDayLiquid))} ${units[1]} More Expected`}
                />
                <InfoCard
                    title="Snow Accumulation"
                    icon="weather_snowy"
                    summary={`${Math.round(weatherData.currently.currentDaySnow)} ${units[1]}`}
                    other={`${Math.max(0, Math.round(weatherData.daily.data[0].snowAccumulation) - Math.round(weatherData.currently.currentDaySnow))} ${units[1]} More Expected`}
                />
                <InfoCard
                    title="Ice Accumulation"
                    icon="weather_hail"
                    summary={`${Math.round(weatherData.currently.currentDayIce)} ${units[1]}`}
                    other={`${Math.max(0, Math.round(weatherData.daily.data[0].iceAccumulation) - Math.round(weatherData.currently.currentDayIce))} ${units[1]} More Expected`}
                />
            </div>
        </>
    );
}

function HourlyPage({ weatherData, units }: WeatherPageProps) {
    if (!weatherData) return;
    const hourlyItems = weatherData.hourly.data.map((hour) => (
        <HourlyData
            key={hour.time}
            time={`${new Date(hour.time * 1000).toLocaleString()}`}
            temperature={`${Math.round(hour.temperature)}${units[2]}`}
            summary={`${hour.summary}`}
            apparentTemperature={`${Math.round(hour.apparentTemperature)}${units[2]}`}
            humidity={`${Math.round(hour.humidity * 100)}%`}
            dewPoint={`${Math.round(hour.dewPoint)}${units[2]}`}
            windSpeed={`${Math.round(hour.windSpeed)} ${units[3]}`}
            windGust={`${Math.round(hour.windGust)} ${units[3]}`}
            windBearing={`${Math.round(hour.windBearing)}°`}
            precipIntensity={`${hour.precipIntensity.toFixed(2)} ${units[0]}`}
            precipAccumulation={`${hour.precipAccumulation.toFixed(2)} ${units[1]}`}
        />
    ));
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <h1 className="text-3xl">Hourly</h1>
                {hourlyItems}
            </div>
        </>
    );
}

function DailyPage({ weatherData, units }: WeatherPageProps) {
    if (!weatherData) return;
    const dailyItems = weatherData.daily.data.map((day) => (
        <DailyData
            key={day.time}
            time={`${new Date(day.time * 1000).toDateString()}`}
            temperatureMax={`${Math.round(day.temperatureMax)}${units[2]}`}
            temperatureMin={`${Math.round(day.temperatureMin)}${units[2]}`}
            summary={`${day.summary}`}
            humidity={`${Math.round(day.humidity * 100)}%`}
            dewPoint={`${Math.round(day.dewPoint)}${units[2]}`}
            windSpeed={`${Math.round(day.windSpeed)} ${units[3]}`}
            windGust={`${Math.round(day.windGust)} ${units[3]}`}
            windBearing={`${Math.round(day.windBearing)}°`}
            precipIntensity={`${day.precipIntensity.toFixed(2)} ${units[0]}`}
            precipAccumulation={`${day.precipAccumulation.toFixed(2)} ${units[1]}`}
            cloudCover={`${Math.round(day.cloudCover * 100)}%`}
            pressure={`${Math.round(day.pressure)} ${units[4]}`}
            uvIndex={`${Math.round(day.uvIndex)}`}
            visibility={`${Math.round(day.visibility)} ${units[5]}`}
        />
    ));
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <h1 className="text-3xl">Daily</h1>
                {dailyItems}
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

type SettingsPageProps = {
    handleUnitChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SettingsPage({ handleUnitChange }: SettingsPageProps) {
    return (
        <>
            <div className="mx-4 mt-20 flex flex-col gap-5 overflow-auto md:ml-60">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl">Theme</h1>
                    <fieldset
                        className="rounded-3xl bg-neutral-50/30 p-4 dark:bg-neutral-800/40"
                    >
                        <div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="light"
                                    value={"light"}
                                />
                                <label htmlFor="light">Light</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="dark"
                                    value={"dark"}
                                />
                                <label htmlFor="dark">Dark</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="radio"
                                    name="theme"
                                    id="system"
                                    value={"system"}
                                    defaultChecked={true}
                                />
                                <label htmlFor="system">System</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl">Units</h1>
                    <fieldset className="rounded-3xl bg-neutral-50/30 p-4 dark:bg-neutral-800/40">
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="ca"
                                value={"ca"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="ca">CA (SI + km/h)</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="ul"
                                value={"uk"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="uk">UK (SI + mph)</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="us"
                                value={"us"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="us">US (Imperial)</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="si"
                                value={"si"}
                                onChange={handleUnitChange}
                            />
                            <label htmlFor="si">SI</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="radio"
                                name="units"
                                id="auto"
                                value={"auto"}
                                defaultChecked={true}
                            />
                            <label htmlFor="auto">Auto</label>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
}

export default function App() {
    let content: any;
    const [pageType, setPageType] = useState<Page>("Currently");
    const [weatherData, setWeatherData] =
        useState<weatherDataResponseParameters | null>(null);
    const [location, setLocation] = useState<number[]>([51.5072, 0.1276]);
    const [unitTypes, setUnitTypes] = useState<string>("si");
    const [units, setUnits] = useState<string[]>([
        "mm/h",
        "cm",
        "°C",
        "m/s",
        "hPa",
        "km",
    ]);

    useEffect(() => {
        const fetchApproxLocation = async () => {
            try {
                const response = await fetch("https://ipinfo.io/json");
                const data = await response.json();
                const [lat, lon] = await data.loc.split(",");
                setLocation([lat, lon]);
            } catch {
                console.error("Unable to fetch approx lat and lon");
            }
        };
        fetchApproxLocation();
    }, []);

    useEffect(() => {
        const fetchWeather = async (location: number[], units: string) => {
            try {
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
        fetchWeather(location, unitTypes);
    }, [location, unitTypes]);

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
        const onUnitChange = () => {
            if (unitTypes === "ca")
                setUnits(["mm/h", "cm", "°C", "km/h", "hPa", "km"]);
            else if (unitTypes === "si")
                setUnits(["mm/h", "cm", "°C", "m/s", "hPa", "km"]);
            else if (unitTypes === "uk")
                setUnits(["mm/h", "cm", "°C", "mph", "hPa", "km"]);
            else if (unitTypes === "us")
                setUnits(["in/h", "in", "°F", "mph", "mbar", "mi"]);
        };
        onUnitChange();
    }, [unitTypes]);

    const handleUnitChange = (value: string) => setUnitTypes(value);

    if (pageType === "Home") content = <HomePage />;
    else if (pageType === "Currently")
        content = <CurrentlyPage weatherData={weatherData} units={units} />;
    else if (pageType === "Hourly")
        content = <HourlyPage weatherData={weatherData} units={units} />;
    else if (pageType === "Daily")
        content = <DailyPage weatherData={weatherData} units={units} />;
    else if (pageType === "Radar") content = <RadarPage />;
    else if (pageType === "Settings")
        content = <SettingsPage handleUnitChange={(e: ChangeEvent<HTMLInputElement>) => handleUnitChange(e.target.value)} />;

    return (
        <>
            <section className="header">
                <div className="fixed top-4 right-4 left-4 z-1000 flex flex-row items-center justify-between gap-4">
                    <Logo />
                    <div>
                        <Searchbar />
                    </div>
                    <div>
                        <LocationButton handleClick={fetchLocation} />
                    </div>
                </div>
            </section>
            <section className="navbar">
                <div className="fixed right-0 bottom-5 z-10000 flex w-full flex-1 justify-center md:top-20 md:left-5 md:w-48 md:justify-start">
                    <Navbar handlePageChange={(p: Page) => setPageType(p)} />
                </div>
                {content}
            </section>
            <section className="footer">
                <div className="m-4 mb-30 md:mb-4">
                    <p className="text-center text-xs">
                        Powered by PirateWeather {weatherData?.flags.version},
                        Maps © Leaflet, Basemap © Google, Radar Data ©
                        Environment Canada
                    </p>
                </div>
            </section>
        </>
    );
}
