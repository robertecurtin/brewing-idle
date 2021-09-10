import React from 'react';
import { Container, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ResourceBar(props) {
  return <Container>
    <Col>Cash: ${props.dollars}</Col>
    <Col>Beer: {props.beer} bottles</Col>
  </Container>;
}

ResourceBar.propTypes = {
  dollars: PropTypes.number.isRequired,
  beer: PropTypes.number.isRequired
};

export default ResourceBar;
