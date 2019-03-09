import { base_url, api_key } from "./../constants/api_url";

const ForecastUrl = city => {
  return `${base_url}forecast?q=${city}&appid=${api_key}`;
};

export default ForecastUrl;
