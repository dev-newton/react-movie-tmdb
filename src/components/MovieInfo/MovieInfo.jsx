import React from "react";
import Button from "components/Button/Button";
import { getYear } from "helpers/";
import "./MovieInfo.css";

const MovieInfo = ({ year, duration, rating }) => {
  return (
    <div className="details__content">
      <div className="year__duration__wrapper">
        <h4 className="year">{getYear(year)}</h4>
        <p className="duration">{duration} mins</p>
      </div>
      <div className="rating__button__wrapper">
        <h5 className="rating">{rating}/10</h5>
        <Button title="Add to Favorite" />
      </div>
    </div>
  );
};

export default MovieInfo;
