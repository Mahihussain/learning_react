import React from "react";
import PricingComponent from "./PricingComponent";
import logo2 from '../../logo2.svg';
import {
  Row,
} from "reactstrap";

let cardArray = [
  {
    title: "This is shit",
    imgSrc: logo2,
    price: 54,
    cardText:
      "Some quick example text to build on the card title and make up thebulk of the card/'s content.",
  },
  {
    title: "This is it",
    imgSrc: logo2,
    price: 12,
    cardText:
      "Some quick example text to build on the card title and make up thebulk of the card/'s content.",
  },
  {
    title: "This is this",
    imgSrc: logo2,
    price: 35,
    cardText:
      "Some quick example text to build on the card title and make up thebulk of the card/'s content.",
  },
];
const getCard = () => {
  return cardArray.map((item, index) => {
    return <PricingComponent key={index} {...item} />;
  });
};
const Pricing = (props) => {
  return (
    <div className="pricing text-center">
      <h1 className="heading-title">WHAT CAN WE DO ?</h1>
      <Row className="mx-2">{getCard()}</Row>
    </div>
  );
};

export default Pricing;
