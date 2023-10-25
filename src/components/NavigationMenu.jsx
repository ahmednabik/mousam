import logo from "/src/assets/logo.svg";
import weather from "/src/assets/weather.svg";
import cities from "/src/assets/cities.svg";
import settings from "/src/assets/settings.svg";
import maps from "/src/assets/maps.svg";
import { Link } from "react-router-dom";
export default function NavigationMenu() {
  const iconSize = "30px";
  return (
    <div className="side-bar">
      <div className="logo">
        <Link to="/">
          <img width={40} src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-menu">
        <div className="nav-weather">
          <Link to="/">
            <img width={iconSize} src={weather} alt="" />
            <h3>Weather</h3>
          </Link>
        </div>
        <div className="nav-cities">
          <Link to="cities">
            <img width={iconSize} src={cities} alt="" />
            <h3>Cities</h3>
          </Link>
        </div>
        <div className="nav-maps">
          <Link to="maps">
            <img width={iconSize} src={maps} alt="" />
            <h3>Maps</h3>
          </Link>
        </div>
        <div className="nav-settings">
          <Link to="settings">
            <img width={iconSize} src={settings} alt="" />
            <h3>Settings</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
