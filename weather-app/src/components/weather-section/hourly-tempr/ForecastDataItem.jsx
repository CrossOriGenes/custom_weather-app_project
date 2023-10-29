/* eslint-disable react/prop-types */

import classes from "./ForecastDataItem.module.css";

function ForecastDataItem({ itemData }) {
  return (
    <div className={classes["hourly-dataItem"]}>
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

export default ForecastDataItem;
