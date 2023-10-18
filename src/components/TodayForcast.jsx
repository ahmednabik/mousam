import { useState, useEffect } from "react";
import { getWeatherData } from "./utils";
import HourlyCard from "./HourlyCard";
export default function TodayForcast({ city, apiKey }) {
  const [weatherData, setWeatherData] = useState(null);
  //https://cors-anywhere.herokuapp.com/
  const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
  useEffect(() => {
    getWeatherData(forecastURL, setWeatherData);
  }, [city]);

  const timeSlots = [6, 9, 12, 15, 18, 21];
  // weatherData.forecast.forecastday[0].hour[i].condition.icon
  return (
    <div className="today-forcast">
      <h4 className="todays-forcast-heading">Today&apos;s Forecast</h4>
      <div className="wrapper">
        {timeSlots.map((time) => {
          return (
            <HourlyCard
              key={time}
              time={time}
              icon={
                weatherData &&
                weatherData.forecast.forecastday[0].hour[time].condition.icon
              }
              temperature={
                weatherData &&
                weatherData.forecast.forecastday[0].hour[time].temp_c
              }
            />
          );
        })}
      </div>
    </div>
  );
}
