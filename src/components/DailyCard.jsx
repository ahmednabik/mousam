import { getDay } from "./utils";
export default function DailyCard({
  date,
  icon,
  condition,
  minTemperature,
  maxTemperature,
}) {
  return (
    <div className="daily-card">
      <h4 className="daily-day">{getDay(date)}</h4>
      <img src={icon} alt="" />
      <p className="daily-condition">{condition}</p>
      <p className="daily-temperature">
        <strong>{Math.round(maxTemperature)}</strong>/
        {Math.round(minTemperature)}
      </p>
    </div>
  );
}
