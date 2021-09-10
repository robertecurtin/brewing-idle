import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';

function ResourceBar(props) {
  return <Container>
    <Col>Cash: ${props.dollars}</Col>
    <Col>Beer: {props.beer} bottles</Col>
  </Container>;
}

export default ResourceBar;
