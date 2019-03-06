import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  CLOUD,
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
  <div className="weather-data-container">
    <WeatherTemperature
      temperature={ 20 }
      weatherState={ CLOUD }
    />
    <WeatherExtraInfo humidity={ 80 } wind={ "10 Km/s" } />
  </div>
);

export default WeatherData;
