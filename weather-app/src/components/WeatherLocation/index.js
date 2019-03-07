import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import GetUrlWeatherByCity from './../../services/GetUrlWeatherByCity'
import TransformWeather from './../../services/TransformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
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
    const api_weather = GetUrlWeatherByCity(this.state.city);
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      const nWeather = TransformWeather(data);

      this.setState({
        data: nWeather
      });
    });
  }

  render = () => {
    const {onWeatherLocationClick} = this.props;
    const {city, data} = this.state;

    return (
      <Card
        className="text-center"
        onClick={onWeatherLocationClick}
      >
        <Card.Body>
          <Location city={city} />
          {data ? <WeatherData data={data} /> : <CircularProgress />}
        </Card.Body>
      </Card>
    );
  }
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;
