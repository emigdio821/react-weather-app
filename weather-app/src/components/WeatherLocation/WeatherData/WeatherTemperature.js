import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  FOG,
  RAIN,
  SUN,
  SUNNY,
  SNOW,
  WINDY
} from './../../../constants/weathers';

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [FOG]: "day-fog",
  [RAIN]: "rain",
  [SUN]: "day-sunny",
  [SUNNY]: "day-sunny",
  [SNOW]: "snow",
  [WINDY]: "windy"
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];
  const iconSize = "2x";

  return (
    <WeatherIcons className="wicon" name={ icon ? icon : "day-sunny" } size={ iconSize } />
  )
}

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weather-temp-container">
    { getWeatherIcon(weatherState) }
    <span className="temperature">{ temperature }</span>
    <span className="temperature-type">ºC</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
