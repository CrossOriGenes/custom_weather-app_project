import classes from "./CurrentTempCard.module.css";
import { Skeleton } from "@mui/material";

function CurrentTempSkeleton() {
  return (
    <article className={classes["temperature-card"]}>
      <div className={classes["temperature-card_text"]}>
        <h1 className={classes["current-temp"]}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={210}
            sx={{ bgcolor: "#e1e1e11a" }}
          />
        </h1>
        <div className={classes["current-climate_location"]}>
          <h3>
            <Skeleton
              variant="text"
              animation="wave"
              width={200}
              sx={{ bgcolor: "#e1e1e11a" }}
            />
          </h3>
          <h5>
            <Skeleton
              variant="text"
              animation="wave"
              width={150}
              sx={{ bgcolor: "#e1e1e11a" }}
            />
          </h5>
        </div>
      </div>

      <div className={classes["temperature-card_icon"]}>
        <Skeleton
          variant="circular"
          animation="wave"
          sx={{ width: "13rem", height: "12.1rem", bgcolor: "#e1e1e11a" }}
        />
      </div>
    </article>
  );
}

export default CurrentTempSkeleton;
