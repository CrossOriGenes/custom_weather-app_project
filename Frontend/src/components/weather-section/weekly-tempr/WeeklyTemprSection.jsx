/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Alert } from "@mui/material";
import Card from "../../UI/Card";
import CardHeader from "../../UI/CardHeader";
import WeeklyTempDataItem from "./WeeklyTempDataItem";
import WklyTempDataItemListLoader from "./WeeklyDataLoader";
import { WeatherContext } from "../../../context/weather-data-context";

import classes from "./WeeklyTemprSection.module.css";
import { getFormattedWeeklyData } from "../../../helpers/forecast-list";

function WeeklyTemprSection({ isLoading, isError }) {
  const weathterCtx = useContext(WeatherContext);
  const weekDaysList = weathterCtx.weeklyData;

  const initialCityData = localStorage.getItem("initialCityData");
  const data = JSON.parse(initialCityData);

  let content;
  let initWklyDataList = [];

  if (data) {
    const { weeklyForecast } = getFormattedWeeklyData(data);
    initWklyDataList = weeklyForecast;
  }

  if (weekDaysList) {
    content = weekDaysList.map((itemData) => (
      <li key={itemData.id}>
        <WeeklyTempDataItem itemData={itemData} />
      </li>
    ));
  }

  if (isError) {
    content = (
      <div style={{ width: "100%" }}>
        <Alert severity="error">{isError}</Alert>
      </div>
    );
  }

  if (isLoading) {
    content = <WklyTempDataItemListLoader />;
  }

  return (
    <Card className={classes["weekly-temperature_section"]}>
      <CardHeader caption="Weekly forecast" />
      <ul className={classes["weekly-dataList"]}>
        {data &&
          initWklyDataList.map((itemData) => (
            <li key={itemData.id}>
              <WeeklyTempDataItem itemData={itemData} />
            </li>
          ))}
        {!data && content}
      </ul>
    </Card>
  );
}

export default WeeklyTemprSection;
