import React from "react";
import { Col } from "reactstrap";
import ServerStatus from '../../server_status.svg';
const AboutImg = (props) => {
  return <Col sm="6" className="d-flex justify-content-center align-items-center"><img src={ServerStatus}/></Col>;
};

export default AboutImg;
