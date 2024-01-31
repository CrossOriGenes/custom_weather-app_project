/* eslint-disable react/prop-types */
import { useState } from "react";

import { WeatherContext } from "./weather-data-context";
import {
  getFormattedCurrentData,
  getFormattedTempConsData,
} from "../helpers/temp-conditions";
import {
  getFormattedHourlyData,
  getFormattedWeeklyData,
} from "../helpers/forecast-list";

function WeatherContextProvider({ children }) {
  const [currentCityData, setCurrentCityData] = useState(null);
  const [initCons, setInitCons] = useState([]);
  const [detailedCons, setDetailedCons] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);


  const currentDataHandler = (data) => {
    const { currentWeather } = getFormattedCurrentData(data);
    setCurrentCityData(currentWeather);
  };

  const conDataListHandler = (data) => {
    const { initialConditions, WEATHER_CONDITIONS: detailedConditions } =
      getFormattedTempConsData(data);

    setInitCons(initialConditions);
    setDetailedCons(detailedConditions);
  };

  const hrlyDataHandler = (data) => {
    const { hourlyForecast } = getFormattedHourlyData(data);
    setHourlyData(hourlyForecast);
  };

  const wklyDataHandler = (data) => {
    const { weeklyForecast } = getFormattedWeeklyData(data);
    setWeeklyData(weeklyForecast);
  };

  const weatherContext = {
    currentCityData,
    currentConditions: { initCons, detailedCons },
    hourlyData,
    weeklyData,
    currentDataHandler,
    conDataListHandler,
    hrlyDataHandler,
    wklyDataHandler,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContextProvider;
