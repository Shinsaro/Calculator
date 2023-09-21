import Col from "react-bootstrap/Col";

function Operation({ symbol }) {
  const handleClick = () => {
    const inputValue =
      document.getElementsByClassName("form-control")[0].innerHTML;
    const input = document.getElementsByClassName("form-control")[0];
    if (inputValue.length >= 1 && inputValue.indexOf(symbol.key) == -1) {
      input.innerHTML = inputValue + symbol.key;
    }
  };
  return (
    <Col className="number" onClick={handleClick}>
      {symbol}
    </Col>
  );
}

export default Operation;
