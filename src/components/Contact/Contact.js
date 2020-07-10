import React from "react";
import { Form, Button } from "reactstrap";
const contact_form = {
  backgroundImage: "Beautifulimg1.jpg",
};
const Contact = (props) => {
  return (
    <div className="bg-height d-flex justify-content-center align-items-center">
      <div className="bg-holder"></div>
      <div className="position-relative">
        <h2 className="mb-3">Contact us</h2>
        <Form className="form">
          <Button className="btn btn-danger">Contact us</Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
