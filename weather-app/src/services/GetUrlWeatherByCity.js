import { base_url, api_key } from './../constants/api_url'

const GetUrlWeatherByCity = (city) => {
  return `${ base_url }?q=${ city }&appid=${ api_key }`;
}

export default GetUrlWeatherByCity;
