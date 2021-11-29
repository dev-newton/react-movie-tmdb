import React from "react";
import MovieInfo from "components/MovieInfo/MovieInfo";
import "./MovieBox.css";

const MovieBox = ({ image, year, duration, rating }) => {
  return (
    <div className="details__wrapper">
      <img src={image} alt="details-img" />
      <MovieInfo year={year} duration={duration} rating={rating} />
    </div>
  );
};

export default MovieBox;
