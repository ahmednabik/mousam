import SearchBar from "./components/SearchBar";
import CityOverview from "./components/CityOverview";
import SevenDayForcast from "./components/SevenDayForcast";
import TodayForcast from "./components/TodayForcast";
import AirConditions from "./components/AirConditions";
import NavigationMenu from "./components/NavigationMenu";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
import "./App.css";
import { useState } from "react";
function App() {
  const [city, setCity] = useState("Dubai");
  function updateParentState(newCity) {
    console.log(newCity);
    setCity(newCity);
  }
  console.log(`rendering for new city: ${city}`);

  return (
    <>
      <SearchBar updateParentState={updateParentState} />
      <CityOverview city={city} apiKey={apiKey} />
      <SevenDayForcast city={city} apiKey={apiKey} />
      <TodayForcast city={city} apiKey={apiKey} />
      <AirConditions city={city} apiKey={apiKey} />
      <NavigationMenu city={city} apiKey={apiKey} />
    </>
  );
}

export default App;
