import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Upgrade(props) {
  const [purchased, setPurchased] = useState(false);
  return <Card
    style={{ width: '15rem' }}
    border={
      props.isPurchasable() ? 'primary' : 'light'
    }
    bg={
      purchased ? 'info' : 'light'
    }
    onClick={() => {
      if (props.isPurchasable() && !purchased) {
        setPurchased(true);
        props.callback();
      }
    }
    }
  >
    <Card.Header>{props.name}</Card.Header>
    <Card.Body>
      <Card.Text>
        {props.text}
      </Card.Text>
    </Card.Body>
  </Card>;
};

Upgrade.propTypes = {
  isPurchasable: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string,
  text: PropTypes.string
};
export default Upgrade;
