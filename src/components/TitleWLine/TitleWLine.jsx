import React from "react";
import "./TitleWLine.css";

const TitleWLine = ({ title }) => {
  return (
    <>
      <h2 className="trailer__header">{title}</h2>
      <hr className="trailer__header__hr" />
    </>
  );
};

export default TitleWLine;
