import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Container, Navbar, CardColumns } from 'react-bootstrap';

const cities = [
  'Jalisco, MX',
  'Madrid, ES',
  'Chicago, US'
];

class App extends Component {
  handleSelectionLocation = (city) => {
    console.log(`handleSelectionLocation ${city}`);
  };

  render = () => {
    return (
      <Container fluid="true" className="mx-0 px-0">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">
            <i className="material-icons align-middle mr-2">
              wb_sunny
            </i>
            <span className="text-uppercase">Weather</span>
            <span className="text-uppercase text-muted font-weight-bold">App</span>
          </Navbar.Brand>
        </Navbar>
        <Container className="my-4">
          <div className="row">
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </div>
        </Container>
      </Container>
    );
  }
}

export default App;
