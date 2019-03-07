import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
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
    <WeatherIcons className="wicon mr-2" name={ icon ? icon : "day-sunny" } size={ iconSize } />
  )
}

const WeatherTemperature = ({ temperature, weatherState }) => (
  <Card.Text>
    { getWeatherIcon(weatherState) }
    <span className="h2">{ temperature }</span>
    <span className="text-muted">ºC</span>
  </Card.Text>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
