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
      type: "info",
      title: "Sexe",
      info: "Femme",
    },
    {
      type: "info",
      title: "Date de naissance",
      info: "16 novembre 1996 (26 ans)",
    },
    {
      type: "info",
      title: "Localisation",
      info: "Toulouse (31)",
    },
    {
      type: "info",
      title: "Moyen de locomotion",
      info: "Véhicule personnel",
    },
    {
      type: "info",
      title: "Caractéristique particulière",
      info: "Tatouée",
    },
    {
      type: "details",
      title: "Hobbies",
      content: [
        {
          type: "title",
          title: "Sélection des hobbies...",
        },
        {
          type: "toggle",
          title: "Musique (Guitare, piano)",
        },
        {
          type: "toggle",
          title: "Création manuelles (coture, bijoux, etc)",
        },
        {
          type: "toggle",
          title: "Photogaphie",
        },
        {
          type: "toggle",
          title: "Vidéo",
        },
        {
          type: "toggle",
          title: "Illusation (type cartoon, paysages)",
        },
      ],
    },
    {
      type: "toggle",
      title: "Musique (Guitare, piano)",
    },
    {
      type: "url",
      title: "Site professionnel",
      info: "https://www.lauralymonceauphotographe.fr/",
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
