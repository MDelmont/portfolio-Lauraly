import React from "react";
import "../../../src/assets/styles/content.scss";
import Line from "./line.jsx";

const Content = ({ data }) => {

  const renderedLines = data.map((element, index) => (
    
    <Line index={index} element={element} />
  ));

  return <div className="content">{renderedLines}</div>;
};

export default Content;
