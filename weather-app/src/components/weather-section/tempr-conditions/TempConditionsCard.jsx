import classes from "./TempConditionsCard.module.css";

import { motion } from "framer-motion";
import TempConditionsItem from "./TempConditionsItem";
import Card from "../../UI/Card";
import { initialConditions } from "../../../helpers/temp-conditions-list";

function TempConditionsCard() {
  return (
    <Card className={classes["temp-conditions_section"]}>
      <header>
        <h1>Temperature Conditions</h1>
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 900 }}
        >
          See more
        </motion.button>
      </header>
      <div className={classes["temp-conditions_items"]}>
        {initialConditions.map((item) => (
          <TempConditionsItem key={item.caption} item={item} />
        ))}
      </div>
    </Card>
  );
}

export default TempConditionsCard;
