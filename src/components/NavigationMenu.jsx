import logo from "/src/assets/logo.svg";
import weather from "/src/assets/weather.svg";
import cities from "/src/assets/cities.svg";
import settings from "/src/assets/settings.svg";
import maps from "/src/assets/maps.svg";
export default function NavigationMenu() {
  const iconSize = "30px";
  return (
    <div className="side-bar">
      <div className="logo">
        <img width={40} src={logo} alt="" />
      </div>

      <div className="nav-menu">
        <div className="nav-weather">
          <img width={iconSize} src={weather} alt="" />
          <h3>Weather</h3>
        </div>
        <div className="nav-cities">
          <img width={iconSize} src={cities} alt="" />
          <h3>Cities</h3>
        </div>
        <div className="nav-maps">
          <img width={iconSize} src={maps} alt="" />
          <h3>Maps</h3>
        </div>
        <div className="nav-settings">
          <img width={iconSize} src={settings} alt="" />
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
}
