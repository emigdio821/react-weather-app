import React, { Component } from "react";
import "./App.css";
import LocationList from "./components/LocationList";
import { Container, Navbar, Row } from "react-bootstrap";
import WeatherDetailsModal from "./components/WeatherDetailsModal";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCity,
  faBolt,
  faHeart,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCity, faBolt, faHeart, faWind);

const cities = ["Jalisco, MX", "Madrid, ES", "Chicago, US", "London, GB"];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null, modalShow: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSelectionLocation = city => {
    this.setState({ city, modalShow: true });
  };

  handleShow() {
    this.setState({ modalShow: true });
  }

  handleClose() {
    this.setState({ modalShow: false });
  }

  render() {
    const { city, modalShow } = this.state;
    let weatherDetails;

    if (city) {
      weatherDetails = (
        <WeatherDetailsModal
          city={city}
          modalShow={modalShow}
          onHide={this.handleClose}
        />
      );
    }

    return (
      <Container fluid="true" className="mx-0 px-0">
        {weatherDetails}
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon="bolt" className="mr-2" />
            <span className="text-uppercase">Weather</span>
            <span className="text-uppercase text-muted font-weight-bold">
              App
            </span>
          </Navbar.Brand>
        </Navbar>
        <Container fluid="true" className="my-4">
          <Row>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Row>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default App;
