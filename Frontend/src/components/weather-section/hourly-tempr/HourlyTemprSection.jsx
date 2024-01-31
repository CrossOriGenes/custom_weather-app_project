/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Alert } from "@mui/material";
import { WeatherContext } from "../../../context/weather-data-context";
import Card from "../../UI/Card";
import CardHeader from "../../UI/CardHeader";
import HrlyTempDataItemSkeletons from "./HourlyDataSkeleton";
import HourlyTempDataItem from "./HourlyTempDataItem";
import { getFormattedHourlyData } from "../../../helpers/forecast-list";

import classes from "./HourlyTemprSection.module.css";

function HourlyTemprSection({ isLoading, isError }) {
  const weatherCtx = useContext(WeatherContext);
  const hoursList = weatherCtx.hourlyData;

  const initialCityData = localStorage.getItem("initialCityData");
  const data = JSON.parse(initialCityData);

  let content;
  let initHrlyDataList = [];
  if (data) {
    const { hourlyForecast } = getFormattedHourlyData(data);
    initHrlyDataList = hourlyForecast;
  }

  if (hoursList) {
    content = hoursList.map((itemData) => (
      <li key={itemData.timeslot}>
        <HourlyTempDataItem itemData={itemData} />
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
    content = <HrlyTempDataItemSkeletons />;
  }

  return (
    <Card className={classes["hourly-temperature_section"]}>
      <CardHeader caption="Today's forecast" />
      <ul className={classes["hourly-dataList"]}>
        {data &&
          initHrlyDataList.map((itemData) => (
            <li key={itemData.timeslot}>
              <HourlyTempDataItem itemData={itemData} />
            </li>
          ))}
        {!data && content}
      </ul>
    </Card>
  );
}

export default HourlyTemprSection;
