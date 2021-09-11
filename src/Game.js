import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ResourceBar from './ResourceBar';
import ResourceManager from './ResourceManager';
import Upgrades from './Upgrades';
import Careers from './Careers';
import upgradeRow1Config from './config/upgradeRow1Config';

function Game() {
    const cashManager = ResourceManager('cash', 10);
    const beerExpManager = ResourceManager('beerExp', 11);
    const businessExpManager = ResourceManager('businessExp', 11);
    const [currentJob, setCurrentJob] = useState('Bartender');
    return <div className='Game'>
        <Container>
            <Row>
                <ResourceBar
                    dollars={cashManager.getValue()}
                    beerExp={beerExpManager.getValue()}
                    businessExp={businessExpManager.getValue()}
                />
            </Row>
            <Row>
                <Careers currentJob={currentJob} setCurrentJob={setCurrentJob}/>
                {/* {currentJob}
                <Form>
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                        onChange={() => setCurrentJob('Bart ender')}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                        onChange={() => setCurrentJob('Bar tender')}
                    />
                </Form> */}

            </Row>
            {/* <Row>
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
            </Row> */}

            <Row>
                <Upgrades
                    cashManager={cashManager}
                    beerExpManager={beerExpManager}
                    businessExpManager={businessExpManager}
                    config={upgradeRow1Config}
                />
            </Row>
        </Container>
    </div>;
}

export default Game;
