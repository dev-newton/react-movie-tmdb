import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
