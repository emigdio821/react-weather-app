const location = "Jalisco,mx";
const api_key = "e844e072aa494f25e00a5d8456850d45";
const base_url = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${ base_url }?q=${ location }&appid=${ api_key }`;
