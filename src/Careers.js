import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Career from './Job';
import managerPropTypes from './managerPropTypes';

const Careers = (props) => {
  const dollars = props.dollars;
  const beerExp = props.beerExp;
  const businessExp = props.businessExp;
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
                  isVisible={() =>
                    (dollars * 10 >= job.requirement.cash) &&
                    (beerExp * 10 >= job.requirement.beerExp) &&
                    (businessExp * 10 >= job.requirement.businessExp)
                  }
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
  dollars: PropTypes.number.isRequired,
  beerExp: PropTypes.number.isRequired,
  businessExp: PropTypes.number.isRequired,
  beerExpManager: managerPropTypes,
  businessExpManager: managerPropTypes,
  cashManager: managerPropTypes,
  config: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    generates: PropTypes.shape({
      cash: PropTypes.number,
      beerExp: PropTypes.number,
      businessExp: PropTypes.number
    })
  }))
  )
};

export default Careers;
