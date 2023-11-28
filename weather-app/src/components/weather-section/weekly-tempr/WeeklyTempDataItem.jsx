/* eslint-disable react/prop-types */

import classes from "./WeeklyTempDataItem.module.css";

function WeeklyTempDataItem({ itemData }) {
  return (
    <div className={classes["weekly-dataItem"]}>
      <p>{itemData.day}</p>
      <div className={classes["dataItem-icon"]}>
        <img src={itemData.icon} alt="forecast-icon" />
      </div>
      <h4>
        {itemData.maxTemp}
        <sup>&#176;</sup>
        <span>
          {" "}/ {itemData.minTemp}
          <sup>&#176;</sup>
        </span>
      </h4>
    </div>
  );
}

export default WeeklyTempDataItem;
