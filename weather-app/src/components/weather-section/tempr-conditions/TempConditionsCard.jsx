import classes from "./TempConditionsCard.module.css";

import WrapperBlock from "../../UI/WrapperBlock";
import TempConditionsItem from "./TempConditionsItem";
import { initialConditions } from "../../../helpers/temp-conditions-list";

function TempConditionsCard() {
  return (
    <WrapperBlock caption="Temperature Conditions" btnTitle="See more">
      <div className={classes["temp-conditions_container"]}>
        {initialConditions.map((item) => (
          <TempConditionsItem key={item.caption} item={item} />
        ))}
      </div>
    </WrapperBlock>
  );
}

export default TempConditionsCard;
