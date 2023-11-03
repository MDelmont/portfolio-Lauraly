import { useState } from "react";


const Camera = ({ name }) => {
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
