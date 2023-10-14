import SearchBar from "./components/SearchBar";
import CityOverview from "./components/CityOverview";
import SevenDayForcast from "./components/SevenDayForcast";
import TodayForcast from "./components/TodayForcast";
import AirConditions from "./components/AirConditions";
import NavigationMenu from "./components/NavigationMenu";
import "./App.css";

function App() {
  return (
    <>
      <SearchBar />
      <CityOverview />
      <SevenDayForcast />
      <TodayForcast />
      <AirConditions />
      <NavigationMenu />
    </>
  );
}

export default App;
