import Wrapper from "../components/UI/Wrapper";
import CurrentTempCard from "../components/weather-section/current-weather/CurrentTempCard";
import SearchBar from "../components/UI/SearchBar";
import TempConditionsCard from "../components/weather-section/tempr-conditions/TempConditionsCard";
import HourlyTemprSection from "../components/weather-section/hourly-tempr/HourlyTemprSection";
import WeeklyTemprSection from "../components/weather-section/weekly-tempr/WeeklyTemprSection";

const HomePage = () => {
  return (
    <section style={{ marginLeft: "6rem" }}>
      <SearchBar />
      <Wrapper>
        <CurrentTempCard />
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
