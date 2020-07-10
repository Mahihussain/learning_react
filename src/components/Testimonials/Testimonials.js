import React from "react";
import { Row } from "reactstrap";
import TestimonialList from "./TestimonialList";
const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <h1 className="heading-title text-center"> WHAT CLIENT'S SAY </h1>
      <div className="testimonialList">
        <TestimonialList />
      </div>
    </div>
  );
};

export default Testimonials;
