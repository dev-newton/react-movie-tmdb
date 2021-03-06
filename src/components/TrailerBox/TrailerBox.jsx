import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "./TrailerBox.css";

const TrailerBox = ({ key, videoLink, title }) => {
  return (
    <div key={key} className="trailer__box">
      <AiOutlinePlayCircle fontSize="20" />
      <p>{title}</p>
    </div>
  );
};

export default TrailerBox;
