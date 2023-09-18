import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/calculator.css";
import * as Icon from "react-bootstrap-icons";
import "./App.css";

function App() {
  return (
    <Container className="calculator">
      <Row className="container-form-control">
        <input
          type="text"
          className="form-control"
          placeholder="0"
          aria-label="Introduce a number"
          aria-describedby="basic-addon1"
        />
      </Row>
      <Row className="sectionNumbers">
        <Col className="number">C</Col>
        <Col className="number">AC</Col>
        <Col className="number">%</Col>
        <Col className="number">/</Col>
      </Row>
      <Row className="sectionNumbers">
        <Col className="number">1</Col>
        <Col className="number">2</Col>
        <Col className="number">3</Col>
        <Col className="number">
          <Icon.Asterisk style={{ fontSize: "30px" }} />
        </Col>
      </Row>
      <Row className="sectionNumbers">
        <Col className="number">4</Col>
        <Col className="number">5</Col>
        <Col className="number">6</Col>
        <Col className="number">
          <Icon.Dash style={{ fontSize: "30px" }} />
        </Col>
      </Row>
      <Row className="sectionNumbers">
        <Col className="number">7</Col>
        <Col className="number">8</Col>
        <Col className="number">9</Col>
        <Col className="number">
          <Icon.Plus style={{ fontSize: "30px" }} />
        </Col>
      </Row>
      <Row className="sectionNumbers">
        <Col className="number0">0</Col>
        <Col className="number">,</Col>
        <Col className="number">=</Col>
      </Row>
    </Container>
  );
}

export default App;
