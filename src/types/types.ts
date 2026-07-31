export type WeatherDataResponseParameters = {
    alerts: Array<{
        description: string;
        expires: number;
        regions: Array<string>;
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

export type PhotonResponse = {
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

export type PhotonFeature = {
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

export type SavedLocationType = {
    name: string;
    lat: number;
    lon: number;
    id: string;
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
