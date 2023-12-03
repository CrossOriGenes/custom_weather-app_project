import Wrapper from "../components/UI/Wrapper";
import CurrentTempCard from "../components/weather-section/current-weather/CurrentTempCard";
import SearchBar from "../components/UI/SearchBar";
import TempConditionsCard from "../components/weather-section/tempr-conditions/TempConditionsCard";
import HourlyTemprSection from "../components/weather-section/hourly-tempr/HourlyTemprSection";
import WeeklyTemprSection from "../components/weather-section/weekly-tempr/WeeklyTemprSection";
import { useEffect, useState } from "react";
import useRequest from "../hooks/use-request";

const HomePage = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const { isError, isLoading, sendRequest: getRequestData } = useRequest();

  const searchCityHandler = (cityName) => {
    setCity(cityName);
  };

  useEffect(() => {
    const request = {
      url: `http://api.weatherapi.com/v1/current.json?q=${city}&key=ec11eb36620b4c63ade183922232806`,
    };

    const getData = (data) => {
      setWeatherData(data);
    };

    // console.log(weatherData);
    getRequestData(request, getData);
  }, [city, getRequestData]);

  return (
    <section style={{ marginLeft: "6rem" }}>
      <SearchBar onSearch={searchCityHandler} />
      <Wrapper>
        <CurrentTempCard
          data={weatherData}
          isError={isError}
          isLoading={isLoading}
        />
        <TempConditionsCard />
      </Wrapper>
      <Wrapper style={{ flexDirection: "column", padding: "2rem 0" }}>
        <HourlyTemprSection />
        <WeeklyTemprSection />
      </Wrapper>
    </section>
  );
};

export default HomePage;
