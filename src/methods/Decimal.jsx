import Col from "react-bootstrap/Col";

function Decimal({ decimalSeparator }) {
  const handleClick = () => {
    var inputValue =
      document.getElementsByClassName("form-control")[0].innerHTML;
    var input = document.getElementsByClassName("form-control")[0];
    if (inputValue.length >= 1 && inputValue.indexOf(".") == -1) {
      input.innerHTML =
        inputValue + document.getElementById("decimalSeparator").innerHTML;
    }
  };
  return (
    <Col className="number" onClick={handleClick}>
      <p id="decimalSeparator">{decimalSeparator}</p>
    </Col>
  );
}

export default Decimal;
