import Col from "react-bootstrap/Col";

export default function Erase() {
  function Reset() {
    document.getElementsByClassName("form-control")[0].innerHTML = "";
  }

  return (
    <Col
      className="number"
      style={{ fontSize: "40px" }}
      value="C"
      onClick={Reset}
    >
      C
    </Col>
  );
}
