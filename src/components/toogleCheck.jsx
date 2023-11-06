import "../../src/assets/styles/toggleCheck.scss";
import { useState } from "react";
const ToggleCheck = ({ isCheck }) => {
  const [activeToggle, setactiveToggle] = useState(isCheck);
  const changeToggleCheck = () => {
    setactiveToggle(!activeToggle);
  };
  return (
    <div
      className={`toggle-check-cont ${activeToggle ? "active" : ""}`}
      onClick={changeToggleCheck}
    >
      <div className="toggle-check"></div>
    </div>
  );
};

export default ToggleCheck;
