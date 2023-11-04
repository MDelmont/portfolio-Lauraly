import PartNav from "./partNav.jsx";
import "../../../src/assets/styles/navbar.scss";
import { useState } from "react";
const NavBar = () => {
  const [classNameNav, setClassNameNav] = useState("navBar acceuil");

  const handleNavClick = (className) => {
    setClassNameNav(`navBar ${className}`);
  };
  return (
    <div className={classNameNav}>
      <PartNav iconName="home" title="ACCEUIL" onClick={handleNavClick} />
      <PartNav iconName="profil" title="PROFIL" onClick={handleNavClick} />
      <PartNav iconName="research" title="PARCOURS" onClick={handleNavClick} />
      <PartNav
        iconName="setting"
        title="COMPÉTENCES"
        onClick={handleNavClick}
      />
      <PartNav iconName="call" title="CONTACT" onClick={handleNavClick} />
    </div>
  );
};

export default NavBar;
