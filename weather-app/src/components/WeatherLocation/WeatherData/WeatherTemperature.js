import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  FOG,
  RAIN,
  SUN,
  SNOW,
  THUNDER,
  DRIZZLE
} from './../../../constants/weathers';

const icons = {
  [CLOUD]: "cloud",
  [FOG]: "day-fog",
  [RAIN]: "rain",
  [SUN]: "day-sunny",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers"
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
