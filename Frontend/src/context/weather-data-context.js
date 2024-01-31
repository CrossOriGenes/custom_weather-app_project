/* eslint-disable no-unused-vars */
import { createContext } from "react";

export const WeatherContext = createContext({

    currentCityData: null,
    currentConditions: null,
    hourlyData: [],
    weeklyData: [],
    currentDataHandler: () => { },
    conDataListHandler: () => { },
    hrlyDataHandler: () => { },
    wklyDataHandler: () => { },
});