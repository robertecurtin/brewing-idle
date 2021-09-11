import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Career from './Job';
import managerPropTypes from './managerPropTypes';

const Careers = (props) => {
  // const beerExpManager = props.beerExpManager;
  // const cashManager = props.cashManager;
  const config = props.config;

  return <Container>
    <Row>
      <Col>
        <Form>
          {config.map((career) => {
            return <Row key={career}> {
              career.map((job) => {
                return <Career
                  key={job.title}
                  setCurrentJob={props.setCurrentJob}
                  isVisible={() => true}
                  title={job.title}
                  text={job.text}
                />;
              })
            }
            </Row>;
          })}
        </Form>
        Current job: {props.currentJob}
      </Col>
    </Row>
  </Container>;
};

Careers.propTypes = {
  currentJob: PropTypes.string.isRequired,
  setCurrentJob: PropTypes.func.isRequired,
  beerExpManager: managerPropTypes,
  businessExpManager: managerPropTypes,
  cashManager: managerPropTypes,
  config: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    generates: PropTypes.shape({
      cash: PropTypes.number,
      beerExp: PropTypes.number,
      businessExp: PropTypes.number
    })
  })
  )
};

export default Careers;
