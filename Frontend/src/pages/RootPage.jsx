// import { useEffect } from "react";
import MainNavigator from "../components/UI/MainNavigator";
import { Outlet } from "react-router-dom";
// import WeatherContextProvider from "../context/weather-provider";

const RootPage = () => {

  // useEffect(() => {
  //   const request = {
  //     url: `http://api.weatherapi.com/v1/forecast.json?key=ec11eb36620b4c63ade183922232806&q=London&days=7&aqi=yes&alerts=yes`,
  //   };

  //   const getData = (data) => {
  //     weatherCtx.currentDataHandler(data);
  //     weatherCtx.conDataListHandler(data);
  //     weatherCtx.hrlyDataHandler(data);
  //     weatherCtx.wklyDataHandler(data);

  //     // console.log(data);
  //   };

  //   sendRequest(request, getData);
  // },[sendRequest,weatherCtx])

  return (
    <>
      <MainNavigator />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
