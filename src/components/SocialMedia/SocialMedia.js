import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

const socialMedia = () => {
    return (<div className="social-media text-center">
        <p>FIND US ON SOCIAL MEDIA</p>
        <FontAwesomeIcon icon={faGoogle} size="3x"/>
        <FontAwesomeIcon icon={faFacebook} size="3x"/>
        <FontAwesomeIcon icon={faTwitter} size="3x"/>

    </div>);
};

export default socialMedia;