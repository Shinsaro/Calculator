import Col from "react-bootstrap/Col";

export function Operation({ symbol }) {
  const handleClick = () => {
    var symboToBeDraw = "";
    const inputValue =
      document.getElementsByClassName("form-control")[0].innerHTML;
    const input = document.getElementsByClassName("form-control")[0];
    if (inputValue.length >= 1 && inputValue.indexOf(symbol.key) == -1) {
      input.innerHTML = inputValue + symbol.key;
      console.log(symbol);
    }
  };
  return (
    <Col className="number" onClick={handleClick}>
      {symbol}
    </Col>
  );
}
