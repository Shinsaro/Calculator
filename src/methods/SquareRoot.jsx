import Col from "react-bootstrap/Col";
import * as TablerIcons from "@tabler/icons-react";

function SquareRoot() {
  const handleClick = () => {
    document.getElementById("form-control").innerHTML = Math.sqrt(
      document.getElementById("form-control").innerHTML
    );
  };
  return (
    <Col className="number" style={{ fontSize: "30px" }} onClick={handleClick}>
      <TablerIcons.IconSquareRoot size={35} />
    </Col>
  );
}

export default SquareRoot;
