import "../../../src/assets/styles/details.scss";
const Detail = ({ title, index }) => {
  return (
    <div className="detail">
      <p className="p-title">{title}</p>
      <p className="p-details" id={`detail-${index}`}>
        {"Voir plus... >"}
      </p>
    </div>
  );
};

export default Detail;
