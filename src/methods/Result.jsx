import Col from "react-bootstrap/Col";

function ResultOperation() {
  const handleClick = () => {
    const inputValue =
      document.getElementsByClassName("form-control")[0].innerHTML;
    const breakpoint = /\+{1}|-{1}|\*{1}|\/{1}|\%{1}/;
    const operationToDo = breakpoint.exec(inputValue)[0];
    const numberToOperate = inputValue.split(breakpoint);
    var result;
    if (operationToDo == "+") {
      result = numberToOperate.reduce(
        (total, digit) => parseFloat(total) + parseFloat(digit)
      );
    } else if (operationToDo == "-") {
      result = numberToOperate.reduce(
        (total, digit) => parseFloat(total) - parseFloat(digit)
      );
    } else if (operationToDo == "*") {
      result = numberToOperate.reduce(
        (total, digit) => parseFloat(total) * parseFloat(digit)
      );
    } else if (operationToDo == "/") {
      result = numberToOperate.reduce(
        (total, digit) => parseFloat(total) / parseFloat(digit)
      );
    } else if (operationToDo == "%") {
      result = numberToOperate.reduce(
        (total, digit) => (parseFloat(total) / 100) * parseFloat(digit)
      );
    } else {
      result = Math.sqrt(inputValue);
    }
    document.getElementById("form-control").innerHTML = result;
  };
  return (
    <Col className="number" style={{ fontSize: "30px" }} onClick={handleClick}>
      =
    </Col>
  );
}

export default ResultOperation;
