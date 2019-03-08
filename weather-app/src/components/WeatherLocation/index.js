import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Col, Alert } from 'react-bootstrap';
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
      data: null,
      error: null,
      errorMsg: null
    }
  }

  componentDidMount = () => {
    this.onUpdateWeather();
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate');
  }

  onUpdateWeather = () => {
    const api_weather = GetUrlWeatherByCity(this.state.city);

    fetch(api_weather).then(resolve => {
      if (resolve.ok) {
        return resolve.json();
      } else {
        throw new Error(
          'We are sorry, we were not able to get the weather data :('
        );
      }
    }).then(data => {
      const nWeather = TransformWeather(data);

      this.setState({
        data: nWeather
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMsg: error.message
      });
    })
  }

  render = () => {
    const { onWeatherLocationClick } = this.props;
    const { city, data, error, errorMsg } = this.state;
    let errorAlert;

    if (error) {
      errorAlert = <Alert dismissible variant="danger">
        <Alert.Heading>Holly molly!</Alert.Heading>
        <p>
          { errorMsg }
        </p>
      </Alert>;
    }

    return (
      <Col lg={ 3 } md={ 6 } className="mb-3">
        { errorAlert }
        <Card
          className="text-center weather-card"
          onClick={ onWeatherLocationClick }
        >
          <Card.Body>
            <Location city={ city } />
            { data ? <WeatherData data={ data } /> : <CircularProgress />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;
