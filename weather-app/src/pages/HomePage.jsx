import Wrapper from "../components/UI/Wrapper";
import CurrentTempCard from "../components/weather-section/CurrentTempCard";
import SearchBar from "../components/UI/SearchBar";
import TempConditionsCard from "../components/weather-section/tempr-conditions/TempConditionsCard";

const HomePage = () => {
  return (
    <section style={{ marginLeft: "6rem" }}>
      <SearchBar />
      <Wrapper>
        <CurrentTempCard />
        <TempConditionsCard />
      </Wrapper>
    </section>
  );
};

export default HomePage;
