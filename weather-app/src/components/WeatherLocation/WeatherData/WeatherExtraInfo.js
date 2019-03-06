import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weather-xinfo-container">
    <span className="xinfo-text">{ `Humedad: ${humidity}%` }</span>
    <span className="xinfo-text">{ `Viento: ${wind}` }</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
