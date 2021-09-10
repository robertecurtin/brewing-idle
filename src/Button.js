import React  from 'react';
import { Button } from 'react-bootstrap';

const self = (props) => {
  const isPurchasable = props.isPurchasable();
  if (props.isVisible()) {
    return <Button
      variant='primary'
      onClick={() => {
        if (isPurchasable) {
          props.callback();
        }
      }
      }
      disabled={!isPurchasable}
    >
      {props.text}
    </Button>;
  }
  else {
    return <div />;
  }
};

self.propTypes = {
  props: PropTypes.func.isRequired
}
