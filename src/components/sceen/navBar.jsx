import PartNav from "./partNav.jsx";
import "../../../src/assets/styles/navbar.scss";
const NavBar = () => {
  return (
    <div className="navBar">
      <PartNav iconName="home" title="ACCEUIL" />
      <PartNav iconName="profil" title="PROFIL" />
      <PartNav iconName="research" title="PARCOURS" />
      <PartNav iconName="setting" title="COMPÉTENCES" />
      <PartNav iconName="call" title="CONTACT" />
    </div>
  );
};

export default NavBar;
