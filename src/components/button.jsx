import { useState } from "react";
import "../../src/assets/styles/buttons.scss";
/**
 * Implémente la logique mécanique des buttons
 * L'image du bouton change si on clic dessus puis reviens à la normal
 * quand on lache le clic ou on sort de la zone du bouton
 * @param {String} name Nom du bouton utilisé
 * @param {String} iconName - Nom de l'icône (facultatif)
 * @returns {React.JSX.Element} Retourne le composent button
 */
const Button = ({ name, iconName = null }) => {
  const buttonId = `btn-${iconName}`;
  const [imagePath, setImagePath] = useState(
    `../src/assets/img/ui/buttons/${name}.svg`
  );
  const pathIcon = iconName ? `../src/assets/img/icons/${iconName}.svg` : null;

  const handleMouseDown = () => {
    setImagePath(`../src/assets/img/ui/buttons/${name}-clic.svg`);
  };
  const handleMouseUp = () => {
    setImagePath(`../src/assets/img/ui/buttons/${name}.svg`);
  };
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      id={buttonId}
      className="btn-nav"
    >
      <img className="img-nav" src={imagePath} alt={name} />
      {iconName && <img className="icon-nav" src={pathIcon} alt={iconName} />}
    </div>
  );
};

export default Button;
