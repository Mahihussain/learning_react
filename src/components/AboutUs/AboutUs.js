import React from 'react';
import { Row } from 'reactstrap';
import AboutList from './AboutList';
import AboutImg from './AboutImg';

const AboutUs = (props) =>{
    return(<div className="about-us">
        <h1 className="heading-title text-center"> WHY CHOOSE US? </h1>
        <Row className="no-gutters">
            <AboutList/>
            <AboutImg/>
        </Row>
    </div>);
};

export default AboutUs;