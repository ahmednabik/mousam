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
