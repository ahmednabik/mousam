import { useEffect, useState } from "react";
import { getWeatherData } from "./utils";
import wind from "/src/assets/wind.svg";
import humid from "/src/assets/humid.svg";
import thermometer from "/src/assets/thermometer.svg";
import uv from "/src/assets/uv.svg";

export default function AirConditions({ city, apiKey }) {
  const [weatherData, setWeatherData] = useState(null);
  const weatherURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  useEffect(() => {
    getWeatherData(weatherURL, setWeatherData);
  }, [city]);

  return (
    <div className="air-conditions">
      <h4 className="air-conditions-heading">Air conditions</h4>
      <div className="air-conditions-wrapper">
        <div className="air-condition-card">
          <div className="air-condition-card-icon">
            <img src={thermometer} alt="" />
            <p>Feels Like</p>
          </div>
          <h3>
            {weatherData && Math.round(weatherData.current.feelslike_c)}
            <sup>°C</sup>
          </h3>
        </div>
        <div className="air-condition-card">
          <div className="air-condition-card-icon">
            <img src={wind} alt="" />
            <p>Wind Speed</p>
          </div>
          <h3>
            {weatherData && Math.round(weatherData.current.wind_kph)}
            <sup>KPH</sup>
          </h3>
        </div>
        <div className="air-condition-card">
          <div className="air-condition-card-icon">
            <img src={humid} alt="" />
            <p>Humidity</p>
          </div>
          <h3>{weatherData && weatherData.current.humidity}</h3>
        </div>
        <div className="air-condition-card">
          <div className="air-condition-card-icon">
            <img src={uv} alt="" />
            <p>UV Radiation</p>
          </div>
          <h3>{weatherData && weatherData.current.uv}</h3>
        </div>
      </div>
      <a href="#">
        <div className="see-more">See more</div>
      </a>
    </div>
  );
}
