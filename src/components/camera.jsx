import Navigation from "./navigation.jsx";
import Button from "./Button.jsx";
import Screen from "./screen/screen.jsx";

import "../../src/assets/styles/camera.scss";
const Camera = () => {
  return (
    <div className="camera-cont">
      <div className="camera">
        <img
          className="camera-img"
          src="../src/assets/img/ui/camera.png"
          alt=""
        />
      </div>
      <Navigation />
      <Button name="center" iconName="info" />
      <Button name="center" iconName="menu" />
      <Button name="center" iconName="call" />
      <Button name="center" iconName="record" />
      <Button name="center" iconName="profil" />
      <Button name="center" iconName="research" />
      <Button name="center" iconName="setting" />
      <Button name="center" iconName="play" />
      <Button name="center" iconName="back" />
      <Screen />
    </div>
  );
};

export default Camera;
