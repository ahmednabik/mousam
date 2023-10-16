export default function HourlyCard({ time, icon, temperature }) {
  return (
    <div className="hourly-card">
      <h4 className="time-slots">
        {time}:00 {time < 12 ? "AM" : "PM"}
      </h4>
      <img src={icon} alt="" />
      <h2 className="hourly-temperature">
        {Math.round(temperature)}
        <sup>°C</sup>
      </h2>
    </div>
  );
}
