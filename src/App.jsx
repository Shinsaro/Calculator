import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./styles/calculator.css";
import * as Icon from "react-bootstrap-icons";
import "./App.css";
import Erase from "./methods/Reset";
import Number from "./methods/Number";
import Decimal from "./methods/Decimal";
import Operation from "./methods/Operations";
import ResultOperation from "./methods/Result";
import SquareRoot from "./methods/SquareRoot";

function App() {
  return (
    <Container className="calculator">
      <Row className="container-form-control">
        <textarea
          id="form-control"
          className="form-control"
          placeholder="0"
        ></textarea>
      </Row>
      <Row className="sectionNumbers">
        <Erase />
        <SquareRoot />
        <Operation
          symbol={
            <Icon.Percent
              style={{ fontSize: "30px" }}
              id="operation"
              key={"%"}
              className="operation"
            />
          }
        />
        <Operation
          symbol={
            <Icon.Slash
              style={{ fontSize: "45px", rotate: "-20deg" }}
              id="operation"
              key={"/"}
              className="operation"
            />
          }
        />
      </Row>
      <Row className="sectionNumbers">
        <Number digit={1} />
        <Number digit={2} />
        <Number digit={3} />
        <Operation
          symbol={
            <Icon.Asterisk
              style={{ fontSize: "15px" }}
              id="operation"
              key={"*"}
              className="multiply"
            />
          }
        />
      </Row>
      <Row className="sectionNumbers">
        <Number digit={4} />
        <Number digit={5} />
        <Number digit={6} />
        <Operation
          symbol={
            <Icon.Dash
              style={{ fontSize: "30px" }}
              id="operation"
              key={"-"}
              className="operation"
            />
          }
        />
      </Row>
      <Row className="sectionNumbers">
        <Number digit={7} />
        <Number digit={8} />
        <Number digit={9} />
        <Operation
          symbol={
            <Icon.Plus
              style={{ fontSize: "30px" }}
              id="operation"
              key={"+"}
              className="operation"
            />
          }
        />
      </Row>
      <Row className="sectionNumbers">
        <Number digit={0} />
        <Decimal decimalSeparator={"."} className="operation">
          ,
        </Decimal>
        <ResultOperation />
      </Row>
    </Container>
  );
}

export default App;
