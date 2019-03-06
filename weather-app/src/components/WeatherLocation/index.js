import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TransformWeather from './../../services/TransformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Mexico',
      data: null
    }
    console.log('constructor');
  }

  componentDidMount = () => {
    console.log('componentDidMount');
    this.onUpdateWeather();
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate');
  }

  onUpdateWeather = () => {
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      const nWeather = TransformWeather(data);

      this.setState({
        data: nWeather
      });
    });
  }

  render() {
    console.log('render');
    const { city, data } = this.state;

    return (
      <div className="weather-location-container">
        <Location city={ city } />
        { data ? <WeatherData data={ data } /> : <CircularProgress /> }
      </div>
    );
  }
};

export default WeatherLocation;
