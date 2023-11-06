import "../../../src/assets/styles/url.scss";
const Url = ({ title, info }) => {
  console.log(info)
  return (
    <div className="info">
      <p className="p-title-info">{title}</p>
      <p className="p-url-info">
        <a href={info} className="custom-url">
          Lien direct
        </a>
      </p>
    </div>
  );
};

export default Url;
