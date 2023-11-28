import Card from "../../UI/Card";
import CardHeader from "../../UI/CardHeader";
import WeeklyTempDataItem from "./WeeklyTempDataItem";
import { weeklyForecast as weatherWeekly } from "../../../helpers/forecast-list";

import classes from "./WeeklyTemprSection.module.css";

function WeeklyTemprSection() {
  return (
    <Card className={classes["weekly-temperature_section"]}>
      <CardHeader caption="7-day forecast" />
      <ul className={classes["weekly-dataList"]}>
        {weatherWeekly.map((itemData) => (
          <li key={itemData.day}>
            <WeeklyTempDataItem itemData={itemData} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default WeeklyTemprSection;
