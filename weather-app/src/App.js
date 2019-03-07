import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Container, CardColumns } from 'react-bootstrap';

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
      <Container className="my-4">
        <CardColumns>
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectionLocation}
          />
        </CardColumns>
      </Container>
    );
  }
}

export default App;
