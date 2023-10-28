/* eslint-disable react/prop-types */
import classes from "./TempConditionsItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TempConditionsItem({ item }) {
  const unit = item.unit.trim().length > 0 ? item.unit : "";

  return (
    <div className={classes["temp-items"]}>
      <h3>
        <span>
          <FontAwesomeIcon icon={item.icon} />
        </span>{" "}
        <em>{item.caption}</em>
      </h3>
      <h2>
        {item.value}
        <sub>{unit}</sub>
      </h2>
    </div>
  );
}

export default TempConditionsItem;
