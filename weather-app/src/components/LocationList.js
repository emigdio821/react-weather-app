import React from 'react';
import WeatherLocation from './WeatherLocation';

const componentPerCity = (cities) => (
  cities.map((city) => <WeatherLocation key={ city } city={ city } />)
);

const LocationList = ({ cities }) => (
  <div>
    { componentPerCity(cities) }
  </div>
);

export default LocationList;
