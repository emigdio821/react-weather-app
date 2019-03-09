import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import WeatherData from './../WeatherLocation/WeatherData';
import Loader from './../Loader';

const ForecastItem = ({ weekDay, hour, data }) => (
  <Col md={ 6 } className="mb-3">
    <Card
      className="text-center"
    >
      <Card.Body>
        <Card.Title>{ weekDay } Hour: { hour } hrs</Card.Title>
        { data ? <WeatherData data={ data } /> : Loader }
      </Card.Body>
    </Card>
  </Col>
)

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }),
}

export default ForecastItem;
