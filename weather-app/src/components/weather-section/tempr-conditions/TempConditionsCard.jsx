import { useState } from "react";
import WrapperBlock from "../../UI/WrapperBlock";
import TempConditionsItem from "./TempConditionsItem";
import Modal from "../../UI/Modal";
import CardHeader from "../../UI/CardHeader";
import {
  initialConditions,
  WEATHER_CONDITIONS as detailedConditions,
} from "../../../helpers/temp-conditions-list";
import { AnimatePresence } from "framer-motion";

import classes from "./TempConditionsCard.module.css";

function TempConditionsCard() {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <>
      <WrapperBlock
        caption="Temperature Conditions"
        btnTitle="See more"
        onClick={() => setIsExpanded(true)}
      >
        <div className={classes["temp-conditions_container"]}>
          {initialConditions.map((item) => (
            <TempConditionsItem key={item.caption} item={item} />
          ))}
        </div>
      </WrapperBlock>

      <AnimatePresence>
        {isExpanded && (
          <Modal
            className={classes["temp-conditions_detail-section"]}
            onClose={() => setIsExpanded(false)}
          >
            <CardHeader
              caption="Temperature Conditions"
              btnTitle="Close"
              onClick={() => setIsExpanded(false)}
            />
            <div className={classes["temp-conditions_container"]}>
              {detailedConditions.map((item) => (
                <TempConditionsItem key={item.caption} item={item} />
              ))}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default TempConditionsCard;
