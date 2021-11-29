import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Thumbnail from "components/Thumbnail/Thumbnail";
import { getMovies } from "../../../store/actions/movie";

const { REACT_APP_IMAGE_BASE_URL, REACT_APP_POSTER_SIZE } = process.env;

const useMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const { results, page, total_pages } = useSelector(
    (state) => state.movie.movies
  );

  useEffect(() => {
    if (results) {
      setMovies((movies) => [...movies, ...results]);
    }
  }, [results]);

  const dispatch = useDispatch();

  const fetchItems = async (loadMore) => {
    setLoading(true);
    try {
      await dispatch(getMovies(loadMore, page));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const renderItems = movies.map((element, i) => {
    const { poster_path, id, original_title } = element;
    return (
      <Thumbnail
        key={i}
        image={
          poster_path &&
          `${REACT_APP_IMAGE_BASE_URL}${REACT_APP_POSTER_SIZE}${poster_path}`
        }
        movieId={id}
        movieName={original_title}
      />
    );
  });

  useEffect(() => {
    // Function to get movies data
    fetchItems(false);
    // eslint-disable-next-line
  }, []);

  return { renderItems, loading, page, total_pages, fetchItems };
};

export default useMovie;
