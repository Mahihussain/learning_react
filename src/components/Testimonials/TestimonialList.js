import React from 'react';
import { Col } from 'reactstrap';
import CR7 from '../../CR7.jpg';
const testDetails = [{ msg : "This is an amazing Website. I'm glad to work with you.", name: "Cristiano", img: CR7, position: "CEO at CR7"}, { msg : "This is a great Website. I'm delighted to work with you.", name: "Ronaldo", img: CR7, position: "Director at CR7"}];

const TestimonialList = (props) =>{
return( testDetails.map((item, index) => (<Col sm="4" key={index} className="listDetail"> 
    <p> { item.msg } </p>
    <img src={ item.img } />
    <p className="user-details"> <b> { item.name } </b> <br/> { item.position } </p>
</Col>)))
};

export default TestimonialList;