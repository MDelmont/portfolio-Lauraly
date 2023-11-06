import Navbar from "./navBar.jsx";
import Content from "./content.jsx";
import "../../assets/styles/screen.scss";
import { useState } from "react";

const Screen = () => {
  const [classNameScreen, setClassNameScreen] = useState("navBar acceuil");

  const handleScreenClick = (className) => {
    setClassNameScreen(`navBar ${className}`);
  };
  const data = [
    {
      type: "icon-list",
      content: [
        "Photoshop",
        "Lightroom",
        "PremierePro",
        "Xd",
        "InDesign",
        "Illustrator",
        "Procreate",
        "Canva",
      ],
    },
  ];

  return (
    <div className={`screen ${classNameScreen}`}>
      <Navbar onClick={handleScreenClick} />
      <Content data={data} />
    </div>
  );
};

export default Screen;
