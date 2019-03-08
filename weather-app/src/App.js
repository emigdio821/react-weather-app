import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Container, Navbar, Row } from 'react-bootstrap';
import WeatherDetailsModal from './components/WeatherDetailsModal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCity, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCity, faBolt, faHeart);

const cities = [
  'Jalisco, MX',
  'Madrid, ES',
  'Chicago, US',
  'London, UK'
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null, showDetails: false }
    this.handleClose = this.handleClose.bind(this);
  }

  handleSelectionLocation = (city) => {
    this.setState({ city, showDetails: true });
  }

  handleClose() {
    this.setState({ showDetails: false });
  }

  render() {
    const { city, showDetails } = this.state;
    let weatherDetails;

    if (city) {
      weatherDetails = <WeatherDetailsModal
        city={ city }
        showDetails={ showDetails }
        onHide={ this.handleClose }
      />
    }

    let footer = <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="text-center text-white mb-3 social-links">
          <a
           href="https://github.com/emigdio821"
           className="text-white p-2 h3 social-icon"
           rel="noopener noreferrer"
           target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a
           href="https://twitter.com/emigdio821"
           className="text-white p-2 h3 social-icon"
           rel="noopener noreferrer"
           target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a
           href="https://linkedin.com/in/emigdio821/"
           className="text-white p-2 h3 social-icon"
           rel="noopener noreferrer"
           target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
        <div className="text-center text-white text-monospace">
          &copy;2019 — <strong>WeatherApp</strong>
        </div>
      </div>
    </footer>

    return (
      <Container fluid="true" className="mx-0 px-0">
        { weatherDetails }
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon="bolt" className="mr-2" />
            <span className="text-uppercase">Weather</span>
            <span className="text-uppercase text-muted font-weight-bold">App</span>
          </Navbar.Brand>
        </Navbar>
        <Container fluid="true" className="my-4">
          <Row>
            <LocationList
              cities={ cities }
              onSelectedLocation={ this.handleSelectionLocation }
            />
          </Row>
        </Container>
        { footer }
      </Container>
    );
  }
}

export default App;
