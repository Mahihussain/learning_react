import React, { useState, useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddPost = () => {
  let { dispatch } = useContext(PostContext);
  let [id, setId] = useState(null);
  let [userId, setUserId] = useState(null);
  let [title, setTitle] = useState(null);
  let [body, setBody] = useState(null);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //   console.log("Id: ", id);
  //   console.log("UserId: ", userId);
  //   console.log("Title: ", title);
  //   console.log("body: ", body);

  return (
    <form>
      <Button color="danger" onClick={toggle}>
        Open Modal
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <p>
              {" "}
              ID:{" "}
              <input
                type="text"
                className="form-control"
                name="id"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />{" "}
            </p>
            </div>
            <div className="form-group">
            <p>
              {" "}
              User ID:{" "}
              <input
                type="text"
                className="form-control"
                name="userId"
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              />{" "}
            </p>
            </div>
            <div className="form-group">
            <p>
              {" "}
              Title:{" "}
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />{" "}
            </p>
            </div>
            <div className="form-group">
            <p>
              {" "}
              Body:{" "}
              <input
                type="text"
                className="form-control"
                name="body"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />{" "}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>

          <Button
            color="primary"
            onClick={() => {
              dispatch({
                type: "ADD_POST",
                payload: { UserId: userId, Id: id, Title: title, Body: body },
              });
              toggle();
            }}
          >
            Add Post
          </Button>{" "}
          {/* <Button color="primary" onClick={() =>{
                return dispatch => {
                  return new Promise((resolve, reject) => {
                    dispatch({
                      type: "ADD_POST",
                      payload: { UserId: userId, Id: id, Title: title, Body: body },
                    })
                    resolve(toggle);
                  });
                }}
              }>
            Add Post
          </Button> */}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </form>
  );
};
export default AddPost;
