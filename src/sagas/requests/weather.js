import axios from "axios";

export function requestGetWeather(city) {
  return axios.request({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f1c93369f031aed662c120b4ae3b7cc&units=metric`,
  });
}
