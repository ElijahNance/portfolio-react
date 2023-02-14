import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Attack from '../attack.jpg';
import Armored from '../armored.jpg';
import Beast from '../beast.jpg';
import Collosal from '../collosal.jpg';
import Jaw from '../jaw.jpg';
import Warhammer from '../warhammer.jpg';


function Portfolio() {
    return (
        <div>
            <div>
                <h2>Portfolio</h2>
            </div>
            <div className="container" >
            <Row xs={1} md={2} lg={3} className="g-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Jaw} />
                    <Card.Body>
                        <Card.Title>Investment App</Card.Title>
                        <Card.Text>
                            Full stack Investment application built with JavaScript and HandleBars
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="http://murmuring-headland-68808.herokuapp.com/">Deployed Site</Card.Link>
                        <Card.Link href="https://github.com/ElijahNance/full-stack-investment-app">GitHub</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Attack} />
                    <Card.Body>
                        <Card.Title>Random Password Generator</Card.Title>
                        <Card.Text>
                            Random Password Generator built with Javascript.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://elijahnance.github.io/random-password-generator/" target="_blank">Deployed site</Card.Link>
                        <Card.Link href="https://github.com/ElijahNance/random-password-generator" target="_blank">GitHub</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Armored} />
                    <Card.Body>
                        <Card.Title>Work Day Schedular</Card.Title>
                        <Card.Text>
                            Interactive Work Day Schedular built with Javascript
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://elijahnance.github.io/work-day-scheduler/">Deployed Site</Card.Link>
                        <Card.Link href="https://github.com/ElijahNance/work-day-scheduler">GitHub</Card.Link>
                    </Card.Body>
                </Card>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Beast} />
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Card.Text>
                            JavaScript Application that retrieves weather data from any city
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://elijahnance.github.io/weather-dashboard/">Deployed Site</Card.Link>
                        <Card.Link href="https://github.com/ElijahNance/weather-dashboard">GitHub</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Collosal} />
                    <Card.Body>
                        <Card.Title>First Portfolio</Card.Title>
                        <Card.Text>
                            My first Portfolio built using HTML/CSS.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://elijahnance.github.io/portfolio-base/">Deployed Site</Card.Link>
                        <Card.Link href="https://github.com/ElijahNance/portfolio-base">GitHub</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Warhammer} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://elijahnance.github.io/seo-refactor/">Deployed Site</Card.Link>
                        <Card.Link href="https://github.com/ElijahNance/seo-refactor">GitHub</Card.Link>
                    </Card.Body>
                </Card>
            </Row>
            </div>
        </div>
    );
};

export default Portfolio;
