const PartNav = ({ iconName, title }) => {
  const iconUse = `../../src/assets/img/icons/${iconName}.svg`; // Corrected the path
  return (
    <div className="part-nav">
      <img className="icon-nav" src={iconUse} alt={iconName} />
      <p className="title-part-nav">{title}</p>
    </div>
  );
};

export default PartNav;
