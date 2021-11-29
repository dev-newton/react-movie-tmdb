import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Thumbnail.css";

// This component renders the movie poster, and it recieves the image and
// movieId from the movies component
const Thumbnail = ({ image, movieId }) => {
  return (
    <div className="thumbnail">
      {/* movieId is passed as the pathname so we can navigate to the
         movie detail of the movieId that was passed  */}
      <Link
        className="thumbnail__wrapper"
        to={{
          pathname: `/movie/${movieId}`,
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
};

export default Thumbnail;
