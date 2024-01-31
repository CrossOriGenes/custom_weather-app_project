/* eslint-disable react/prop-types */
import { useContext } from "react";
// import { useQuery } from "@tanstack/react-query";
import { Alert } from "@mui/material";
import CurrentTempSkeleton from "./CurrentTempSkeleton";
import { WeatherContext } from "../../../context/weather-data-context";
import { getFormattedCurrentData } from "../../../helpers/temp-conditions";

import classes from "./CurrentTempCard.module.css";

function CurrentTempCard({ isError, isLoading }) {
  // const { data, isError, isLoading, error } = useQuery({
  //   queryKey: ["currentTempData"],
  //   queryFn: fetchData,
  // });
  const weatherCtx = useContext(WeatherContext);
  const resData = weatherCtx.currentCityData;

  const initialCityData = localStorage.getItem("initialCityData");
  const data = JSON.parse(initialCityData);

  let content;
  if (resData) {
    content = (
      <>
        <div className={classes["temperature-card_text"]}>
          <h1 className={classes["current-temp"]}>
            {Math.round(resData.temp_c)}
            <sup>&#8451;</sup>
          </h1>
          <div className={classes["current-climate_location"]}>
            <h3>{resData.text}</h3>
            <h5>
              {resData.name}, {resData.country}
            </h5>
          </div>
        </div>

        <div className={classes["temperature-card_icon"]}>
          <img src={resData.icon} alt="current-weather-icon" />
        </div>
      </>
    );
  }

  if (data) {
    const { currentWeather } = getFormattedCurrentData(data);

    content = (
      <>
        <div className={classes["temperature-card_text"]}>
          <h1 className={classes["current-temp"]}>
            {Math.round(currentWeather.temp_c)}
            <sup>&#8451;</sup>
          </h1>
          <div className={classes["current-climate_location"]}>
            <h3>{currentWeather.text}</h3>
            <h5>
              {currentWeather.name}, {currentWeather.country}
            </h5>
          </div>
        </div>

        <div className={classes["temperature-card_icon"]}>
          <img src={currentWeather.icon} alt="current-weather-icon" />
        </div>
      </>
    );
  }

  if (isLoading) {
    content = <CurrentTempSkeleton />;
  }

  if (isError) {
    content = (
      <div style={{ width: "100%" }}>
        <Alert severity="error">{isError}</Alert>
      </div>
    );
  }

  return <article className={classes["temperature-card"]}>{content}</article>;
}

export default CurrentTempCard;
