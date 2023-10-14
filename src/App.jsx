import SearchBar from "./components/SearchBar";
import CityOverview from "./components/CityOverview";
import SevenDayForcast from "./components/SevenDayForcast";
import TodayForcast from "./components/TodayForcast";
import AirConditions from "./components/AirConditions";
import NavigationMenu from "./components/NavigationMenu";
import "./App.css";
import { useState } from "react";
function App() {
  const apiKey = "1203fc1dd3e14089934135308230510";
  const [city, setCity] = useState("Lahore");
  function updateParentState(newCity) {
    console.log(newCity);
    setCity(newCity);
  }
  console.log(`rendering for new city: ${city}`);

  return (
    <>
      <SearchBar updateParentState={updateParentState} />
      <CityOverview city={city} apiKey={apiKey} />
      <SevenDayForcast city={city} />
      <TodayForcast city={city} />
      <AirConditions city={city} />
      <NavigationMenu city={city} />
    </>
  );
}

export default App;
