/* eslint-disable react/prop-types */
import classes from "./TempConditionsItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skeleton } from "@mui/material";

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

export function TempConditionsItemSkeleton() {
  return (
    <div className={classes["temp-items"]}>
      <h3>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ width: "100px", height: "20px", bgcolor: "#e1e1e11a" }}
        />
      </h3>
      <h2>
        <Skeleton
          variant="text"
          animation="wave"
          width={120}
          height={40}
          sx={{ marginLeft: "-2.1rem", bgcolor: "#e1e1e11a" }}
        />
      </h2>
    </div>
  );
}
