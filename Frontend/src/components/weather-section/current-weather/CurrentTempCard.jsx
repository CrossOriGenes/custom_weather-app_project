/* eslint-disable react/prop-types */
import classes from "./CurrentTempCard.module.css";

function CurrentTempCard({ data, isLoading, isError }) {
  let content;
  if (data) {
    content = (
      <>
        <div className={classes["temperature-card_text"]}>
          <h1 className={classes["current-temp"]}>
            {data.current.temp_c}
            <sup>&#8451;</sup>
          </h1>
          <div className={classes["current-climate_location"]}>
            <h3>{data.current.condition.text}</h3>
            <h5>
              {data.location.name}, {data.location.region}
            </h5>
          </div>
        </div>

        <div className={classes["temperature-card_icon"]}>
          <img src={data.current.condition.icon} alt="current-weather-icon" />
        </div>
      </>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p>{isError.message}</p>;
  }

  return <article className={classes["temperature-card"]}>{content}</article>;
}

export default CurrentTempCard;
