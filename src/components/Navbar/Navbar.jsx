import React from "react";
import { MdMoreVert } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ navTitle }) => {
  const history = useHistory();

  const location = history?.location;
  const goBack = history?.goBack;

  return (
    <nav className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__left">
          {location?.pathname !== "/" && (
            <div onClick={() => goBack()} className="nav__icon">
              <FiArrowLeft />
            </div>
          )}
          <h3>{navTitle}</h3>
        </div>
        <div className="nav__right">
          <div className="nav__icon">
            <MdMoreVert />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
