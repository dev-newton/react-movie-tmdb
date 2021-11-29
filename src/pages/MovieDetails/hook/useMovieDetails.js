import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieById } from "../../../store/actions/movie";

const useMovieDetails = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const movie = useSelector((state) => state.movie.movie);

  const dispatch = useDispatch();

  const fetchItems = async () => {
    setLoading(true);
    try {
      await dispatch(getMovieById(id));
      setLoading(false);
      // setMovie(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Function to get movies data by id
    if (id && id !== "") fetchItems();
    // eslint-disable-next-line
  }, [id]);

  const {
    original_title,
    poster_path,
    overview,
    runtime,
    release_date,
    vote_average,
  } = movie || {};

  return {
    original_title,
    poster_path,
    overview,
    runtime,
    release_date,
    vote_average,
    loading,
    movie,
  };
};

export default useMovieDetails;
