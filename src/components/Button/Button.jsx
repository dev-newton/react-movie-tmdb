import React from "react";
import "./Button.css";

const Button = ({ title }) => {
  return (
    <button data-testid="button" className="btn btn__dark btn__lg">
      {title}
    </button>
  );
};

export default Button;
