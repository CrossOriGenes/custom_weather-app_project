import classes from "./CurrentTempCard.module.css";
import currentWeatherIcon from '../../assets/current-weather-icon.png';

function CurrentTempCard() {
  return (
    <article className={classes["temperature-card"]}>
      <div className={classes["temperature-card_text"]}>
        <h1 className={classes["current-temp"]}>
          32<sup>&#8451;</sup>
        </h1>
        <div className={classes["current-climate_location"]}>
          <h3>Clear Sky</h3>
          <h5>Kolkata, WB</h5>
        </div>
      </div>

      <div className={classes["temperature-card_icon"]}>
        <img src={currentWeatherIcon} alt="current-weather-icon" />
      </div>
    </article>
  );
}

export default CurrentTempCard;
