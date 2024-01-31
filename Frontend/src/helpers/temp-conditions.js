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

export function getFormattedTempConsData(data) {
    const { feelslike_c, wind_kph, precip_mm, humidity, vis_km, uv, pressure_mb, cloud } = data.current;
    const { maxtemp_c, mintemp_c } = data.forecast.forecastday[0].day;

    const WEATHER_CONDITIONS = [
        { icon: faTemperatureThreeQuarters, caption: 'Real feel', value: Math.round(feelslike_c), unit: '\u2103' },
        { icon: faWind, caption: 'Wind', value: wind_kph, unit: 'km/h' },
        { icon: faCloudRain, caption: 'Precipitation', value: precip_mm, unit: 'mm' },
        { icon: faDroplet, caption: 'Humidity', value: humidity, unit: '%' },
        { icon: faEye, caption: 'Visibility', value: vis_km, unit: 'km' },
        { icon: faSun, caption: 'UV Index', value: uv, unit: '' },
        { icon: faTemperatureHigh, caption: 'Maximum', value: Math.round(maxtemp_c), unit: '\u2103' },
        { icon: faTemperatureLow, caption: 'Minimum', value: Math.round(mintemp_c), unit: '\u2103' },
        { icon: faArrowsDownToLine, caption: 'Pressure', value: pressure_mb, unit: 'mb' },
        { icon: faCloud, caption: 'Cloud', value: cloud, unit: '%' },
    ];

    const [realFeel, wind, precipitation, humid, visibility, uvIndex] = WEATHER_CONDITIONS;
    const initialConditions = [realFeel, wind, precipitation, humid, visibility, uvIndex];

    return { WEATHER_CONDITIONS, initialConditions };
}

export function getFormattedCurrentData(data) {
    const { temp_c, condition: { text, icon } } = data.current;
    const { name, country } = data.location;

    const currentWeather = { temp_c, text, icon, name, country };

    return { currentWeather };
}