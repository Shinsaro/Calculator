import Col from "react-bootstrap/Col";
import * as TablerIcons from "@tabler/icons-react";

function SquareRoot() {
  const handleClick = () => {
    document.getElementById("form-control").innerHTML = Math.sqrt(
      document.getElementById("form-control").innerHTML
    );
  };
  return (
    <Col className="number" onClick={handleClick}>
      <TablerIcons.IconSquareRoot className="tabler-icons" size={35} />
    </Col>
  );
}

export default SquareRoot;
