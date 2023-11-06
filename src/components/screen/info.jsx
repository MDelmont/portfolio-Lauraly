import "../../../src/assets/styles/info.scss";
const Info = ({ title, info }) => {
  return (
    <div className="info">
      <p className="p-title-info">{title}</p>
      <p className="p-info">{info}</p>
    </div>
  );
};

export default Info;
