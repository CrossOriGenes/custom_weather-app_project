import Card from "../../UI/Card";
import CardHeader from "../../UI/CardHeader";
import HourlyTempDataItem from "./HourlyTempDataItem";
import { hourlyForecast as weatherToday } from "../../../helpers/forecast-list";

import classes from "./HourlyTemprSection.module.css";

function HourlyTemprSection() {
  return (
    <Card className={classes["hourly-temperature_section"]}>
      <CardHeader caption="Today's forecast" />
      <ul className={classes["hourly-dataList"]}>
        {weatherToday.map((itemData) => (
          <li key={itemData.timeslot}>
            <HourlyTempDataItem itemData={itemData} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default HourlyTemprSection;
