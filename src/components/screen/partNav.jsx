const PartNav = ({ iconName, title, onClick }) => {
  const iconUse = `../../src/assets/img/icons/${iconName}.svg`; // Corrected the path

  // Fonction pour enlever les accents
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const handleNavClick = () => {
    onClick(removeAccents(title.toLowerCase())); // Appelez la fonction onClick avec le titre
  };
  return (
    <div className="part-nav" onClick={handleNavClick}>
      <div className="icon-nav-cont">
        <img className="icon-nav" src={iconUse} alt={iconName} />
      </div>

      <p className="title-part-nav">{title}</p>
    </div>
  );
};

export default PartNav;
