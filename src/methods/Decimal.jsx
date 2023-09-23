import Col from "react-bootstrap/Col";

function Decimal({ decimalSeparator }) {
  const handleClick = () => {
    const inputValue =
      document.getElementsByClassName("form-control")[0].innerHTML;
    const input = document.getElementsByClassName("form-control")[0];
    const breakpoint = /\+{1}|-{1}|\*{1}|\/{1}|\%{1}/;
    const numbers = inputValue.split(breakpoint);

    numbers.forEach((number) => {
      if (inputValue.length >= 1 && number.indexOf(".") == -1) {
        input.innerHTML =
          inputValue + document.getElementById("decimalSeparator").innerHTML;
      }
    });
  };
  return (
    <Col className="number" onClick={handleClick}>
      <p id="decimalSeparator">{decimalSeparator}</p>
    </Col>
  );
}

export default Decimal;
