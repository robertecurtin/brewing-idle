import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row } from 'react-bootstrap';
import ResourceBar from './ResourceBar';
import Upgrade from './Upgrade';
import ResourceManager from './ResourceManager';
import Button from './Button';
import Upgrades from './config/Upgrades';

function Game() {
    const cashManager = ResourceManager('cash', 10);
    const beerManager = ResourceManager('beer', 11);
    return <div className='Game'>
        <Container>
            <Row>
                <ResourceBar dollars={cashManager.getValue()} beer={beerManager.getValue()} />
            </Row>
            <Row>
                <Button text={'Get ' + cashManager.getIncrementValue() + ' dollars'} isPurchasable={() => true} isVisible={() => true} callback={
                    () => {
                        cashManager.add(1);
                    }
                } />

                <Button text={'Buy ' + beerManager.getIncrementValue() + ' beers'} isPurchasable={() => cashManager.getValue() >= 10} isVisible={() => true} callback={
                    () => {
                        beerManager.add(1);
                        cashManager.subtract(10);
                    }
                } />
            </Row>

            <Row>
                <Upgrades
                    beerManager={beerManager}
                    cashManager={cashManager}
                />
            </Row>
        </Container>
    </div>;
}

export default Game;
