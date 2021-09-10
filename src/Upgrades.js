import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Upgrade from './Upgrade';
import PropTypes from 'prop-types';

function Upgrades(props) {
  const beerManager = props.beerManager;
  const cashManager = props.cashManager;
  const config = props.config;

  const payCosts = (costs) => {
    if (costs.cash) {
      cashManager.subtract(costs.cash);
    }
    if (costs.beer) {
      beerManager.subtract(costs.beer);
    }
  };

  const multiplyCashGainBy = (v, costs) => () => {
    cashManager.registerAddFunction((c) => 2 * c);
    payCosts(costs);
  };

  const multiplyBeerGainBy = (v, costs) => () => {
    beerManager.registerAddFunction((b) => 6 * b);
    payCosts(costs);
  };

  return <Container>
    <Row>
      {config.map((upgrade) => {
        return <Col key={'none'}>
          <Upgrade
            isPurchasable={() =>
              beerManager.getValue() >= upgrade.costs.beer &&
              cashManager.getValue() >= upgrade.costs.cash
            }
            name={upgrade.name}
            text={upgrade.text}
            callback={() => {
              const functions = {
                multiplyCashGain: () => {
                  multiplyCashGainBy(upgrade.value, upgrade.costs)();
                },
                multiplyBeerGain: () => {
                  multiplyBeerGainBy(upgrade.value, upgrade.costs)();
                }
              };
              functions[upgrade.function]();
            }
            }
          />
        </Col>;
      })}
    </Row>
  </Container>;
};

const managerPropTypes = PropTypes.shape({
  add: PropTypes.func.isRequired,
  registerAddFunction: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
});

Upgrades.propTypes = {
  beerManager: managerPropTypes,
  cashManager: managerPropTypes,
  config: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    function: PropTypes.oneOf['multiplyCashGain', 'multiplyBeerGain'],
    value: PropTypes.number,
    costs: PropTypes.shape({
      cash: PropTypes.number,
      beer: PropTypes.number
    })
  })
  )
};

export default Upgrades;
