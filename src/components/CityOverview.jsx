import { useState, useEffect } from "react";
import { getWeatherData, getBackgroundClass } from "./utils";
import useFetch from "react-fetch-hook";

export default function CityOverview({ city, apiKey }) {
  // const [weather, setWeather] = useState(null);
  // const [loading, setLoading] = useState(true);
  const currentWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const { isLoading, data, error } = useFetch(currentWeatherURL);

  // useEffect(() => {
  //   getWeatherData(currentWeatherURL, setWeather, setLoading);
  // }, [city]);

  const className =
    data &&
    getBackgroundClass(data.current.condition.code, data.current.is_day);

  if (error)
    return (
      <div className={className || "city-overview"}>
        <h2>Error fetching data: {error}</h2>
      </div>
    );

  if (isLoading)
    return (
      <div className={className || "city-overview"}>
        <h2>Data is Loading....</h2>
      </div>
    );

  return (
    <div className={className || "city-overview"}>
      <h2>{data && data.location.name}</h2>
      {data && (
        <>
          <p>
            {data.location.country} ({data.location.localtime})
          </p>
          <h1>
            {Math.round(data.current.temp_c)}
            <sup>°C</sup>
          </h1>
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
            width="170px"
          />
        </>
      )}
    </div>
  );
}
