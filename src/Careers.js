import React  from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Career from './Career';

const Careers = (props) => {
  return <Container>
    <Row>
      <Col>
        <Form>
        <Career title='Bartender' setCurrentJob={props.setCurrentJob} isVisible={() => true}/>
        <Career title='Bar owner' setCurrentJob={props.setCurrentJob} isVisible={() => true}/>
        </Form>
        Current job: {props.currentJob}
      </Col>
    </Row>
  </Container>;
};

Careers.propTypes = {
  currentJob: PropTypes.string.isRequired,
  setCurrentJob: PropTypes.func.isRequired
};

export default Careers;
