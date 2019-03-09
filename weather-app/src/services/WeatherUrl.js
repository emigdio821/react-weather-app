import { base_url, api_key } from "./../constants/api_url";

const WeatherUrl = city => {
  return `${base_url}weather?q=${city}&appid=${api_key}`;
};

export default WeatherUrl;
