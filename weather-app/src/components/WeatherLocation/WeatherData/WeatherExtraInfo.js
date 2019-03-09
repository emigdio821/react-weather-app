import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const WeatherExtraInfo = ({ humidity, wind }) => (
  <Card.Text>
    <span className="xinfo-text">{`Humidity: ${humidity}%`}</span>
    <span className="xinfo-text">{`Wind: ${wind}`}</span>
  </Card.Text>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
