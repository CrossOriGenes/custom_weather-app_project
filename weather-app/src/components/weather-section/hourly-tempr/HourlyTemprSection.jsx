import Card from "../../UI/Card";
import CardHeader from "../../UI/CardHeader";
import ForecastDataItem from "./ForecastDataItem";
import { hourlyForecast as weatherToday } from "../../../helpers/hourly-forecast";

import classes from "./HourlyTemprSection.module.css";

function HourlyTemprSection() {
  return (
    <Card className={classes["hourly-temperature_section"]}>
      <CardHeader caption="Today's forecast" />
      <ul className={classes["hourly-dataList"]}>
        {weatherToday.map((itemData) => (
          <li key={itemData.timeslot}>
            <ForecastDataItem itemData={itemData} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default HourlyTemprSection;
