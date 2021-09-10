import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Upgrade from '../Upgrade';

function Upgrades(props) {
  const beerManager = props.beerManager;
  const cashManager = props.cashManager;

  const upgradesConfig = [
    {
      name: 'Get a raise',
      text: 'Doubles cash gained',
      function: 'multiplyCashGain',
      value: 2,
      costs: { cash: 0, beer: 5 }
    }
  ];

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

  const upgradeFunctions = {
    multiplyCashGain: multiplyCashGainBy
  };

  return <Container>
    <Row>
      {upgradesConfig.map((upgrade) => {
        return <Col>
          <Upgrade
            isPurchasable={() =>
              beerManager.getValue() >= upgrade.costs.beer &&
              cashManager.getValue() >= upgrade.costs.cash
            }
            name={'Get a raiise'}
            text={'Doubles cash gained'}
            callback={multiplyCashGainBy(2, { beer: 5 })}
          />
        </Col>;
      })}
      <Col>
        <Upgrade
          isPurchasable={() => beerManager.getValue() >= 12}
          name={'Get a raise'}
          text={'Doubles cash gained'}
          callback={multiplyCashGainBy(2, { beer: 5 })}
        />
      </Col>
      <Col>
        <Upgrade
          isPurchasable={() => beerManager.getValue() >= 12}
          name={'Get a raise'}
          text={'Doubles cash gained'}
          callback={multiplyCashGainBy(2, { beer: 12 })}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Upgrade
          isPurchasable={() => beerManager.getValue() >= 6}
          name={'Six-pack'}
          text={'Multiplies beer gained by 6'}
          callback={multiplyBeerGainBy(6, { beer: 6 })}
        />
      </Col>
    </Row>
  </Container>;
};

export default Upgrades;
