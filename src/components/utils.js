export function getDate() {
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  return `${currentYear}-${currentMonth}-${currentDay}`; //YYYY-MM-DD
}

export function getDay(date) {
  const newDate = new Date(date);
  const day = newDate.getDay();

  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "Invalid Day";
  }
}

export async function getWeatherData(url, setWeatherData) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setWeatherData(data);
    } else {
      console.log("Unable to fetch 7 Day forecast data");
    }
  } catch (error) {
    console.log("7 Day forecast data error: " + error);
  }
}

export function getBackgroundClass(code, is_day) {
  switch (code) {
    // Sunny or Clear conditions
    case 1000:
    case 1135:
    case 1147:
      return `city-overview ${is_day ? "sunny" : "clear"}`;

    // Rain conditions
    case 1150:
    case 1153:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1261:
    case 1264:
      return "city-overview rain";

    // Snow conditions
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1255:
    case 1258:
    case 1282:
      return "city-overview snow";

    // Cloudy conditions
    case 1006:
    case 1009:
    case 1030:
      return "city-overview cloudy";

    default:
      return "city-overview";
  }
}
