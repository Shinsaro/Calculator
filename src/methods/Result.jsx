import Col from "react-bootstrap/Col";
import { evaluate } from "mathjs";

function ResultOperation() {
  const handleClick = () => {
    const inputValue =
      document.getElementsByClassName("form-control")[0].innerHTML;

    document.getElementById("form-control").innerHTML =
      evaluate(inputValue).toFixed(2);
  };
  return (
    <Col className="number" style={{ fontSize: "30px" }} onClick={handleClick}>
      =
    </Col>
  );
}

export default ResultOperation;
