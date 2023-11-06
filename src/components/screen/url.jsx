import "../../../src/assets/styles/url.scss";
const Url = ({ title, info }) => {
  console.log(info);
  return (
    <div className="url">
      <p className="p-title-url">{title}</p>
      <p className="p-url">
        <a target="_blank" rel="noreferrer" href={info} className="custom-url">
          Lien direct
        </a>
      </p>
    </div>
  );
};

export default Url;
