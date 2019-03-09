import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Location = ({ city }) => (
  <Card.Title className="text-monospace">{city}</Card.Title>
);

Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
