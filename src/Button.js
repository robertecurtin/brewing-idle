import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default (props) => {
  const isPurchasable = props.isPurchasable()
  if (props.isVisible()) {
    return <Button
      variant='primary'
      onClick={() => {
        if (isPurchasable) {
          props.callback()
        }
      }
      }
      disabled={!isPurchasable}
    >
      {props.text}
    </Button>
  }
  else {
    return <div />
  }
};
