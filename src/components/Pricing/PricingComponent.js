import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
const PricingComponent = (props) => {
  const { title, imgSrc, price, cardText } = props;
//   console.log(title, imgSrc, price, cardText);
  return (
    <Col sm="4" className="text-center mb-3">
      <Card className="flex-column">
        <CardBody>
          <img src={imgSrc} alt="Card image cap" className="pricing-img"/>
          <h4>{title}</h4>
          <h2>${price} </h2>
          <CardText>{cardText}</CardText>
          <Button className="btn pricing-button">Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PricingComponent;
