/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";

import classes from "./HourlyTempDataItem.module.css";

function HourlyTempDataItem({ itemData }) {
  const dataItemClasses =
    itemData.timeslot === "Now"
      ? `${classes["hourly-dataItem"]} ${classes.current}`
      : `${classes["hourly-dataItem"]}`;

  return (
    <div className={dataItemClasses}>
      <p>{itemData.timeslot}</p>
      <div className={classes["dataItem-icon"]}>
        <img src={itemData.icon} alt="forecast-icon" />
      </div>
      <h4>
        {itemData.temperature}
        <sup>&#176;</sup>
      </h4>
    </div>
  );
}

export default HourlyTempDataItem;

export function HourlyDataItemSkeleton() {
  return (
    <div className={classes["hourly-dataItem"]}>
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
