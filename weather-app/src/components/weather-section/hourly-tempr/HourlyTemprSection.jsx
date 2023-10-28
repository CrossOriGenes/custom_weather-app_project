import Card from "../../UI/Card";

function HourlyTemprSection() {
  return (
    <Card className="hourly-temperature_section">
      <ul className="hourly-dataList">
        <li>
          <div className="hourly-dataItem_block">
            <p>2pm</p>
            <img src="" alt="curr-weather-icon" />
            <h4>
              32<sup>&#176;</sup>
            </h4>
          </div>
        </li>
      </ul>
    </Card>
  );
}

export default HourlyTemprSection;
