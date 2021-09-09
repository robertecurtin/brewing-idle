import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';

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
        setPurchased(true)
        props.callback()
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

export default Upgrade;
