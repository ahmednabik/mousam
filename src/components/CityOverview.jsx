import { useState, useEffect } from "react";
import { getWeatherData, getBackgroundClass } from "./utils";

export default function CityOverview({ city, apiKey }) {
  const [weather, setWeather] = useState(null);
  const currentWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  useEffect(() => {
    getWeatherData(currentWeatherURL, setWeather);
  }, [city]);

  const className =
    weather &&
    getBackgroundClass(weather.current.condition.code, weather.current.is_day);

  return (
    <div className={className || "city-overview"}>
      <h2>{weather && weather.location.name}</h2>
      {weather && (
        <>
          <p>{weather.location.country}</p>
          <p>{weather.location.localtime}</p>
          <h1>
            {Math.round(weather.current.temp_c)}
            <sup>°C</sup>
          </h1>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            width="170px"
          />
        </>
      )}
    </div>
  );
}
