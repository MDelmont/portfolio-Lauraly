import "../../../src/assets/styles/logicielCard.scss";
const LogicielCard = ({ title }) => {
  const extantion = {
    Photoshop: "svg",
    Lightroom: "svg",
    PremierePro: "svg",
    Xd: "svg",
    InDesign: "svg",
    Illustrator: "svg",
    Procreate: "png",
    Canva: "png",
  };

  const path = `../src/assets/img/icons/${title.toLowerCase()}.${
    extantion[title]
  }`;

  return (
    <div className="logiciel-Card">
      <div className="logo-cont">
        <img className="img-card" src={path} alt="title" />
      </div>
      <p className="p-title-card">{title}</p>
    </div>
  );
};

export default LogicielCard;
