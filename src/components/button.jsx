import { useState } from "react";
import "../../src/assets/styles/buttons.scss";
/**
 * Implémente la logique mécanique des buttons
 * L'image du bouton change si on clic dessus puis reviens à la normal
 * quand on lache le clic ou on sort de la zone du bouton
 * @param {String} name Nom du bouton utilisé 
 * @returns {React.JSX.Element} Retourne le composent button
 */
const Button = ({ name }) => {
  const buttonId = `btn-${name}`;
  const [imagePath, setImagePath] = useState(
    `../src/assets/img/ui/buttons/${name}.svg`
  );

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
      <img src={imagePath} alt={name} />
    </div>
  );
};

export default Button;
