import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Job = (props) => {
  if (props.isVisible()) {
    return <Form.Check
      inline
      label={props.title}
      name='job'
      type="radio"
      id={`inline-radio-${props.title}`}
      onChange={() => props.setCurrentJob(props.title)}
    />;
  }
  else {
    return <div />;
  }
};

Job.propTypes = {
  title: PropTypes.string.isRequired,
  setCurrentJob: PropTypes.func.isRequired,
  isVisible: PropTypes.func.isRequired
};

export default Job;
