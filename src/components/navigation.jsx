import Button from "./Button.jsx";
import "../../src/assets/styles/navigation.scss";
import "../../src/assets/styles/buttons.scss";
const Navigation = () => {
  return (
    <div className="navigation-btn">
      <Button name="down" iconName="down-arrow" />
      <Button name="up" iconName="top-arrow" />
      <Button name="right" iconName="right-arrow" />
      <Button name="left" iconName="left-arrow" />
      <Button name="center" iconName="ok" />
    </div>
  );
};

export default Navigation;
