import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [addToDo, setAddToDo] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((el) => {
      return [...el, addToDo];
    });
    setAddToDo("");
  };

  const handleRemove = (index) => {
    setList((el) => el.filter((arr, i) => index !== i));
  };
  return (
    <div className="d-flex flex-row bd-highlight mb-3">
      <Container className="col-md-5 mt-5 mx-auto bg-info border border-5 rounded-4">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="p-3" controlId="formGroupText">
                <Form.Label>
                  <b> Add To Do </b>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={addToDo}
                  onChange={(e) => setAddToDo(e.target.value)}
                  placeholder="Enter details"
                />
                <div className="p-2 bd-highlight">
                  <Button variant="warning" type="submit">
                    add
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <div className="items-list">
          {list.map((item, index) => (
            <h3 key={index}>
              <span>
                {item}
                <span className="d-flex flex-row-reverse">
                  <FontAwesomeIcon
                    onClick={() => handleRemove(index)}
                    icon={faClose}
                  />
                </span>
              </span>
              <hr />
            </h3>
          ))}
        </div>
      </Container>
    </div>
  );
}
