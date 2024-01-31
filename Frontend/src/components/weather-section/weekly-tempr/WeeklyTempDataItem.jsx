/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";

import classes from "./WeeklyTempDataItem.module.css";

function WeeklyTempDataItem({ itemData }) {
  const dataItemClasses =
    itemData.day === "Today"
      ? `${classes["weekly-dataItem"]} ${classes.current}`
      : `${classes["weekly-dataItem"]}`;

  return (
    <div className={dataItemClasses}>
      <p>{itemData.day}</p>
      <div className={classes["dataItem-icon"]}>
        <img src={itemData.icon} alt="forecast-icon" />
      </div>
      <h4>
        {itemData.maxTemp}
        <sup>&#176;</sup>
        <span>
          {" "}
          / {itemData.minTemp}
          <sup>&#176;</sup>
        </span>
      </h4>
    </div>
  );
}

export default WeeklyTempDataItem;

export function WeeklyDataItemLoader() {
  return (
    <div className={classes["weekly-dataItem"]}>
      <p>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ width: "3rem", fontSize: "0.75rem", bgcolor: "#e1e1e11a" }}
        />
      </p>
      <div className={classes["dataItem-icon"]}>
        <Skeleton
          variant="circular"
          animation="wave"
          sx={{ width: "2.938rem", height: "2.875rem", bgcolor: "#e1e1e11a" }}
        />
      </div>
      <h4>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ width: "2rem", fontSize: "1.25rem", bgcolor: "#e1e1e11a" }}
        />
      </h4>
    </div>
  );
}
