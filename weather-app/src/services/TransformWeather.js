import Convert from 'convert-units';
import {
  CLOUD,
} from './../constants/weathers';

const getTemp = (kelvin) => {
  return Number(Convert(kelvin).from("K").to("C").toFixed());
}

const getWeatherState = (weather_data) => {
  return CLOUD;
}

const TransformWeather = (weather_data) => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const temperature = getTemp(temp);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${ speed } Km/s`
  }

  return data;
}

export default TransformWeather;
