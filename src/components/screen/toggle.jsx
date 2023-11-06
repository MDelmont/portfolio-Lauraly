import "../../../src/assets/styles/toggle.scss";
import ToogleCheck from "../toogleCheck";

const Toggle = ({ title }) => {
  return (
    <div className="toggle">
      <p className="p-title-info">{title}</p>
      {<ToogleCheck isCheck={true} />}
    </div>
  );
};

export default Toggle;
