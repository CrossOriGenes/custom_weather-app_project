import {
    faTemperatureThreeQuarters,
    faTemperatureLow,
    faTemperatureHigh,
    faSun,
    faEye,
    faDroplet,
    faCloud,
    faCloudRain,
    faWind,
    faArrowsDownToLine,
} from "@fortawesome/free-solid-svg-icons";

export const WEATHER_CONDITIONS = [
    { icon: faTemperatureThreeQuarters, caption: 'Real feel', value: 35, unit: '\u2103' },
    { icon: faWind, caption: 'Wind', value: 6.8, unit: 'km/h' },
    { icon: faCloudRain, caption: 'Precipitation', value: 0.0, unit: 'mm' },
    { icon: faDroplet, caption: 'Humidity', value: 75, unit: '%' },
    { icon: faEye, caption: 'Visibility', value: 4, unit: 'km' },
    { icon: faSun, caption: 'UV Index', value: 8.0, unit: '' },
    { icon: faTemperatureLow, caption: 'Min-temperature', value: 31.4, unit: '\u2103' },
    { icon: faTemperatureHigh, caption: 'Max-temperature', value: 22.8, unit: '\u2103' },
    { icon: faArrowsDownToLine, caption: 'Pressure', value: 1013.0, unit: 'mb' },
    { icon: faCloud, caption: 'Cloud', value: 50, unit: '%' },
];

const [realFeel, wind, precipitation, humidity, visibility, uvIndex] = WEATHER_CONDITIONS;
export const initialConditions = [realFeel, wind, precipitation, humidity, visibility, uvIndex];