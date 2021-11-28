import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Thumbnail.css";

const Thumbnail = ({ image, movieId, movieName }) => {
  return (
    <div className="thumbnail">
      <Link
        to={{
          pathname: `/${movieId}`,
          movieName: `${movieName}`,
        }}
      >
        <img src={image} alt="thumbnail" />
      </Link>
    </div>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default Thumbnail;
