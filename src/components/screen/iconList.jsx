import "../../../src/assets/styles/iconList.scss";
import LogicielCard from "./logicielCard.jsx";

const IconList = ({ list }) => {
  console.log(list);
  const renderedicon = list.map((icon) => <LogicielCard title={icon} />);

  return <div className="icon-list">{renderedicon}</div>;
};

export default IconList;
