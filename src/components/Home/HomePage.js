import React from "react";
import PropTypes from 'prop-types';
import { Carousel, Button } from 'react-bootstrap';

const HomePage = ({launchAppHandler}) =>  {
    return(
        <Carousel interval={1000}>
            <Carousel.Item>
            <img style={{minHeight: "655px"}} alt="productivity" className="homeImg" src="https://lh3.google.com/u/0/d/0B30SIT1ukJtaVjJoS0hEemVtcXc=w2560-h1318-iv1"/>
            <Carousel.Caption>
                <Button bsStyle="info" bsSize="large" onClick={launchAppHandler}>Launch App</Button>
                <h3>Todo + Doing + Done</h3>
                <p>A to-do list of multiple status to promote your work efficiency</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="productivity" style={{minHeight: "655px"}} className="homeImg" src="https://lh3.google.com/u/0/d/0B30SIT1ukJtaUnhSLVdSN3k1TEE=w2560-h1318-iv1"/>
            <Carousel.Caption>
                <Button bsStyle="info" bsSize="large" onClick={launchAppHandler}>Launch App</Button>
                <h3>Pomodoro</h3>
                <p>A flexible timer to manage your time scientifically</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="productivity" className="homeImg" src="https://lh3.google.com/u/0/d/0B30SIT1ukJtaU2lWd2VQekhESVE=w2560-h1318-iv1      "/>
            <Carousel.Caption>
                <Button bsStyle="info" bsSize="large" onClick={launchAppHandler}>Launch App</Button>
                <h3>Time Recorder</h3>
                <p>A visible timer recorder to track your work timer easily</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

HomePage.propTypes = {
    launchAppHandler: PropTypes.func.isRequired
}

export default HomePage;
