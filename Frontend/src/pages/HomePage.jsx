/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { WeatherContext } from "../context/weather-data-context";
import Wrapper from "../components/UI/Wrapper";
import CurrentTempCard from "../components/weather-section/current-weather/CurrentTempCard";
import SearchBar from "../components/UI/SearchBar";
import TempConditionsCard from "../components/weather-section/tempr-conditions/TempConditionsCard";
import HourlyTemprSection from "../components/weather-section/hourly-tempr/HourlyTemprSection";
import WeeklyTemprSection from "../components/weather-section/weekly-tempr/WeeklyTemprSection";
import useRequest from "../hooks/use-request";

const HomePage = () => {
  const { isError, isLoading, sendRequest: getRequest } = useRequest();
  const weatherCtx = useContext(WeatherContext);

  const getPreciseLocDataHandler = (lat, lon) => {
    const request = {
      url: `http://api.weatherapi.com/v1/forecast.json?key=ec11eb36620b4c63ade183922232806&q=${lat},${lon}&days=7&aqi=yes&alerts=yes`,
    };

    const getData = (data) => {
      weatherCtx.currentDataHandler(data);
      weatherCtx.conDataListHandler(data);
      weatherCtx.hrlyDataHandler(data);
      weatherCtx.wklyDataHandler(data);
    };

    getRequest(request, getData);
    localStorage.removeItem("initialCityData");
  };

  const searchCityHandler = (cityName) => {
    const request = {
      url: `http://api.weatherapi.com/v1/forecast.json?key=ec11eb36620b4c63ade183922232806&q=${cityName}&days=7&aqi=yes&alerts=yes`,
    };

    const getData = (data) => {
      weatherCtx.currentDataHandler(data);
      weatherCtx.conDataListHandler(data);
      weatherCtx.hrlyDataHandler(data);
      weatherCtx.wklyDataHandler(data);
    };

    getRequest(request, getData);
    localStorage.removeItem("initialCityData");
  };

  return (
    <section style={{ marginLeft: "6rem" }}>
      <SearchBar
        onSearch={searchCityHandler}
        onPreciseSearch={getPreciseLocDataHandler}
      />
      <Wrapper>
        <CurrentTempCard
          // data={resData}
          isError={isError}
          isLoading={isLoading}
        />
        <TempConditionsCard isError={isError} isLoading={isLoading} />
      </Wrapper>
      <Wrapper style={{ flexDirection: "column", padding: "2rem 0" }}>
        <HourlyTemprSection isError={isError} isLoading={isLoading} />
        <WeeklyTemprSection isError={isError} isLoading={isLoading} />
      </Wrapper>
    </section>
  );
};

export default HomePage;


