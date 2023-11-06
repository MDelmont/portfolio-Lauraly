import "../../../src/assets/styles/line.scss";
import Info from "./info.jsx";
import Detail from "./detail.jsx";
import Url from "./url.jsx";
import Toggle from "./toggle.jsx";
import IconList from "./iconList.jsx";
const Line = ({ index, element }) => {
  let className = "line";
  const constructorLine = (object) => {
    if (object.type == "info")
      return <Info title={object?.title} info={object?.info} />;
    if (object.type == "details")
      return <Detail title={object?.title} index={index} />;
    if (object.type == "url")
      return <Url title={object?.title} info={object?.info} />;
    if (object.type == "toggle") return <Toggle title={object?.title} />;
    if (object.type == "icon-list") {
      className = "line grid";
      return <IconList list={element?.content} />;
    }
  };
  const lines = constructorLine(element);
  return (
    <div id={`line-${index}`} className={className}>
      {lines}
    </div>
  );
};

export default Line;
