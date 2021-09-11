import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ResourceBar(props) {
  return <Container>
    <Row>
    <Col>Cash: ${props.dollars}</Col>
    <Col>Brewing EXP: {props.beerExp}</Col>
    <Col>Business EXP: {props.businessExp}</Col>
    </Row>
  </Container>;
}

ResourceBar.propTypes = {
  dollars: PropTypes.number.isRequired,
  beerExp: PropTypes.number.isRequired,
  businessExp: PropTypes.number.isRequired
};

export default ResourceBar;
