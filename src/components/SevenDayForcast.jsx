import { useEffect, useState } from "react";
import { getWeatherData } from "./utils";
import DailyCard from "./DailyCard";
export default function SevenDayForcast({ city, apiKey }) {
  const [weatherData, setWeatherData] = useState(null);
  const forecastURL = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
  useEffect(() => {
    getWeatherData(forecastURL, setWeatherData);
  }, [city]);
  const daysArray = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="seven-day-forcast">
      <h4 className="seven-day-heading">7 Day Forecast</h4>
      {daysArray.map((day) => {
        return (
          <>
            <DailyCard
              key={day}
              date={weatherData && weatherData.forecast.forecastday[day].date}
              icon={
                weatherData &&
                weatherData.forecast.forecastday[day].day.condition.icon
              }
              condition={
                weatherData &&
                weatherData.forecast.forecastday[day].day.condition.text
              }
              minTemperature={
                weatherData &&
                weatherData.forecast.forecastday[day].day.mintemp_c
              }
              maxTemperature={
                weatherData &&
                weatherData.forecast.forecastday[day].day.maxtemp_c
              }
            />
          </>
        );
      })}
    </div>
  );
}
