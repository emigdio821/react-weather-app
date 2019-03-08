import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ModalDetails extends Component {

  render() {
    const { city, showDetails, onHide } = this.props;

    return (
      <Modal
        show={ showDetails }
        onHide={ onHide }
        keyboard={ false }
        backdrop='static'
      >
      <Modal.Header closeButton>
        <Modal.Title>
          { city }
          <FontAwesomeIcon icon="city" className="ml-2" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hey! We're going to show more details here, just wait a bit more, come back later.
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Modal.Body>
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
  city: PropTypes.string.isRequired
}

export default ModalDetails;
