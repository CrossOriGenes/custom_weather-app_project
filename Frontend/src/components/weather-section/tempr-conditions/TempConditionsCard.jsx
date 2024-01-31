/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { WeatherContext } from "../../../context/weather-data-context";
import { AnimatePresence } from "framer-motion";
import { Alert } from "@mui/material";
import WrapperBlock from "../../UI/WrapperBlock";
import TempConditionsItem from "./TempConditionsItem";
import Modal from "../../UI/Modal";
import CardHeader from "../../UI/CardHeader";
import { ConsItemSkeletons1, ConsItemSkeletons2 } from "./TempConsItemSkeleton";
import { getFormattedTempConsData } from "../../../helpers/temp-conditions";

import classes from "./TempConditionsCard.module.css";

function TempConditionsCard({ isError, isLoading }) {
  const [isExpanded, setIsExpanded] = useState();
  const weatherCtx = useContext(WeatherContext);
  const { initCons, detailedCons } = weatherCtx.currentConditions;

  const initialCityData = localStorage.getItem("initialCityData");
  const data = JSON.parse(initialCityData);

  let defaultContent, popupContent;
  let conList1 = [],
    conList2 = [];

  if (initialCityData) {
    const { initialConditions, WEATHER_CONDITIONS: detailedConditions } =
      getFormattedTempConsData(data);
    conList1 = initialConditions;
    conList2 = detailedConditions;
  }

  if (initCons || detailedCons) {
    defaultContent = initCons.map((item) => (
      <TempConditionsItem key={item.caption} item={item} />
    ));
    popupContent = detailedCons.map((item) => (
      <TempConditionsItem key={item.caption} item={item} />
    ));
  }

  if (isError) {
    defaultContent = (
      <div style={{ width: "100%" }}>
        <Alert severity="error">{isError}</Alert>
      </div>
    );
    popupContent = (
      <div style={{ width: "100%" }}>
        <Alert severity="error">{isError}</Alert>
      </div>
    );
  }

  if (isLoading) {
    defaultContent = <ConsItemSkeletons1 />;
    popupContent = <ConsItemSkeletons2 />;
  }

  return (
    <>
      <WrapperBlock
        caption="Temperature Conditions"
        btnTitle="See more"
        onClick={() => setIsExpanded(true)}
      >
        <div className={classes["temp-conditions_container"]}>
          {data &&
            conList1.map((item) => (
              <TempConditionsItem key={item.caption} item={item} />
            ))}
          {!data && defaultContent}
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
              {data &&
                conList2.map((item) => (
                  <TempConditionsItem key={item.caption} item={item} />
                ))}
              {!data && popupContent}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default TempConditionsCard;
