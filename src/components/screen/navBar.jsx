import PartNav from "./partNav.jsx";
import "../../../src/assets/styles/navbar.scss";

const NavBar = ({ onClick }) => {

  const handleNavClick = (className) => {
    onClick(`navBar ${className}`);
  };
  return (
    <div className="navBar">
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
