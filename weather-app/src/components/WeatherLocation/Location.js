import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
  <div className="location-container">
    <h1 className="title">{ city }</h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
