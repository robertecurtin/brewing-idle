import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import ResourceBar from './ResourceBar';
import ResourceManager from './ResourceManager';
import Upgrades from './Upgrades';
import Careers from './Careers';
import upgradeRow1Config from './config/upgradeRow1Config';
import careerConfig from './config/careerConfig';

function Game() {
    const cashManager = ResourceManager('cash', 0);
    const beerExpManager = ResourceManager('beerExp', 1);
    const businessExpManager = ResourceManager('businessExp', 1);
    const [currentJob, setCurrentJob] = useState('Bartender');
    const [timeElapsed, setTimeElapsed] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            for (let career of careerConfig) {
                for (let job of career) {
                    if (currentJob == job.title) {
                        cashManager.add(job.generates.cash);
                        beerExpManager.add(job.generates.beerExp);
                        businessExpManager.add(job.generates.businessExpManager);
                    }
                }
            }
        }, 1000);
        return () => clearInterval(timer);
    });


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
                <Careers
                    currentJob={currentJob}
                    setCurrentJob={setCurrentJob}
                    config={careerConfig}
                    timeElapsed={timeElapsed}
                    setTimeElapsed={setTimeElapsed}
                />
            </Row>
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
