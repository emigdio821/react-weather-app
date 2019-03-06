import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weather-xinfo-container">
    <span className="xinfo-text">{ `Humidity: ${humidity}%` }</span>
    <span className="xinfo-text">{ `Wind: ${wind}` }</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
