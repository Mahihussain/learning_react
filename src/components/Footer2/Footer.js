import React from "react";
import { Row, Col } from "reactstrap";

const Footer = (props) => {
  return (
    <div className="footer">
      <Row className="p-5 no-gutters">
        <Col lg="5">
          <p>
            {" "}
            Visit this website, Digital marketing and React Development. Digital
            marketing and React Development.
          </p>
        </Col>
        <Col lg="3">
          <p>
            {" "}
            <b> CONTACT US </b>
            <br />
            World trade center
            <br />
            +8801688732729
            <br />
            mahihussain020@gmail.com
          </p>
        </Col>
        <Col lg="4">
          <form>
            <div className="form-item">
              <input type="text" name="email" placeholder="Email"/>
            </div>
            <button> Send </button>
          </form>
        </Col>
      </Row>
      <svg
        className="footer-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#7b1798"
          fillOpacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,250.7C480,267,600,277,720,250.7C840,224,960,160,1080,149.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
