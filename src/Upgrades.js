import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Upgrade from './Upgrade';
import managerPropTypes from './managerPropTypes';

function Upgrades(props) {
  const beerExpManager = props.beerExpManager;
  const businessExpManager = props.businessExpManager;
  const cashManager = props.cashManager;
  const config = props.config;

  const payCosts = (costs) => {
    if (costs.cash) {
      cashManager.subtract(costs.cash);
    }
    if (costs.beerExp) {
      beerExpManager.subtract(costs.beerExp);
    }
    if (costs.businessExp) {
      businessExpManager.subtract(costs.businessExp);
    }
  };

  const multiplyCashGainBy = (v, costs) => () => {
    cashManager.registerAddFunction((c) => 2 * c);
    payCosts(costs);
  };

  const multiplybeerExpGainBy = (v, costs) => () => {
    beerExpManager.registerAddFunction((b) => 6 * b);
    payCosts(costs);
  };

  return <Container>
    <Row>
      {config.map((upgrade) => {
        return <Col key={upgrade.name}>
          <Upgrade
            isPurchasable={() =>
              beerExpManager.getValue() >= upgrade.costs.beerExp &&
              cashManager.getValue() >= upgrade.costs.cash
            }
            name={upgrade.name}
            text={upgrade.text}
            callback={() => {
              const functions = {
                multiplyCashGain: () => {
                  multiplyCashGainBy(upgrade.value, upgrade.costs)();
                },
                multiplybeerExpGain: () => {
                  multiplybeerExpGainBy(upgrade.value, upgrade.costs)();
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

Upgrades.propTypes = {
  beerExpManager: managerPropTypes,
  businessExpManager: managerPropTypes,
  cashManager: managerPropTypes,
  config: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    function: PropTypes.oneOf['multiplyCashGain', 'multiplyBeerExpGain'],
    value: PropTypes.number,
    costs: PropTypes.shape({
      cash: PropTypes.number,
      beerExp: PropTypes.number,
      businessExp: PropTypes.number
    })
  })
  )
};

export default Upgrades;
