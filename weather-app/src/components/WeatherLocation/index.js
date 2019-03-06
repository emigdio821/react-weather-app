import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div className="weather-location">
    <Location city={ "México" } />
    <WeatherData />
  </div>
);

export default WeatherLocation;
