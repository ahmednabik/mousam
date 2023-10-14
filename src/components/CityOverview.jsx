import { useState, useEffect } from "react";

export default function CityOverview({ city, apiKey }) {
  const [weather, setWeather] = useState(null);

  async function getCurrentWeather() {
    let currentWeatherURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    try {
      const response = await fetch(currentWeatherURL);
      if (response.ok) {
        const currentWeatherData = await response.json();
        setWeather(currentWeatherData);
      } else {
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error); //handle error like a real man
    }
  }

  useEffect(() => {
    getCurrentWeather();
  }, [city]);

  return (
    <div className="city-overview">
      <h2>{weather && weather.location.name}</h2>
      {weather && (
        <>
          <p>{weather.location.country}</p>
          <h1>{weather.current.temp_c}°C</h1>
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
