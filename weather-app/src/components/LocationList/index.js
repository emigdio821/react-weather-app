import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation';


const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocation = (city) => {
    onSelectedLocation(city);
  }
  const componentPerCity = (cities) => (
    cities.map((city) => (
      <WeatherLocation
        key={ city }
        city={ city }
        onWeatherLocationClick={ () => handleWeatherLocation(city) }
      />
    ))
  );

  return componentPerCity(cities)
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
