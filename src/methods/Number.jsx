import { useRef } from "react";
import Col from "react-bootstrap/Col";

export default function Number({ digit }) {
  const valueDigit = useRef(0);
  const number = digit == 0 ? "number0" : "number";
  const handleClick = () => {
    document.getElementsByClassName("form-control")[0].innerHTML +=
      valueDigit.current.innerHTML;
  };
  return (
    <Col className={number} onClick={handleClick}>
      <p ref={valueDigit}>{digit}</p>
    </Col>
  );
}
