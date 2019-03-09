import React, { Component } from 'react';
import { Modal, Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ForecastUrl from '../../services/ForecastUrl'
import TransformForecast from '../../services/TransformForecast';
import ForecastItem from '../ForecastItem';
import Loader from './../Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ModalDetails extends Component {

  constructor() {
    super();
    this.state = {
      forecastData: null,
      error: false,
      errorMsg: null,
      loading: true
    }
  }


  componentDidMount() {
    const { city } = this.props;
    const api_forecast = ForecastUrl(city);

    fetch(api_forecast).then(resolve => {
      if (resolve.ok) {
        return resolve.json();
      } else {
        throw new Error(
          'We are sorry, we were not able to get the forecast data :('
        );
      }
    }).then(data => {
      const forecastData = TransformForecast(data);

      this.setState({ forecastData });
    }).catch(error => {
      this.setState({
        error: true,
        errorMsg: error.message
      });
    }).finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { city, showDetails, onHide } = this.props;
    const { forecastData } = this.state;
    let modalBody;
    let forecastItem =
      forecastData ?
        forecastData.map(forecast => (
          <ForecastItem
            key={ `${ forecast.weekDay }${ forecast.hour }` }
            weekDay={ forecast.weekDay }
            hour={ forecast.hour }
            data={ forecast.data }
          />
          )
        ) : <Loader />

    if (this.state.loading) {
      modalBody =
      <Modal.Body className="text-center">
        <Loader />
      </Modal.Body>
    } else {
      modalBody =
        <Modal.Body>
         <Row>
          { forecastItem }
         </Row>
        </Modal.Body>
    }

    return (
      <Modal
        size="lg"
        show={ showDetails }
        onHide={ onHide }
        keyboard={ false }
        backdrop="static"
        id="detailsModal"
      >
      <Modal.Header closeButton>
        <Modal.Title>
          { city }
          <FontAwesomeIcon icon="city" className="ml-2" />
          <div className="text-muted">
            Forecast
            <FontAwesomeIcon icon="wind" className="ml-2" />
          </div>
        </Modal.Title>
      </Modal.Header>
      { modalBody }
      <Modal.Footer>
        <Button
          variant="info"
          onClick={ onHide }>
          Cool!
          <FontAwesomeIcon icon="heart" className="ml-2" />
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

ModalDetails.propTypes = {
  city: PropTypes.string
}

export default ModalDetails;
