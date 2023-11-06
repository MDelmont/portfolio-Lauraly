import "../../../src/assets/styles/line.scss";
import Info from "./info.jsx";
import Detail from "./detail.jsx";
import Url from "./url.jsx";
import Toggle from "./toggle.jsx";
const Line = ({ index, element }) => {
  const constructorLine = (object) => {
    if (object.type == "info")
      return <Info title={object?.title} info={object?.info} />;
    if (object.type == "details")
      return <Detail title={object?.title} index={index} />;
    if (object.type == "url")
      return <Url title={object?.title} info={object?.info} />;
    if (object.type == "toggle") return <Toggle title={object?.title} />;
  };
  return (
    <div id={`line-${index}`} className="line">
      {constructorLine(element)}
    </div>
  );
};

export default Line;
