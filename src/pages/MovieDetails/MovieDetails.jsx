import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "components/Header/Header";
import MovieBox from "components/MovieBox/MovieBox";
import TitleWLine from "components/TitleWLine/TitleWLine";
import Layout from "layout/Layout";
import TrailerBox from "components/TrailerBox/TrailerBox";
import Spinner from "components/Spinner/Spinner";
import "./MovieDetails.css";

import apiService from "services/apiService";

const { REACT_APP_IMAGE_BASE_URL, REACT_APP_POSTER_SIZE } = process.env;

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await apiService.getMoviesDataById(id);
      setLoading(false);
      setMovie(response.data);
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

  return (
    <Layout navTitle="Movie details">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header title={original_title} />
          <div className="wrapper">
            <MovieBox
              image={`${REACT_APP_IMAGE_BASE_URL}${REACT_APP_POSTER_SIZE}${poster_path}`}
              year={release_date}
              duration={runtime}
              rating={vote_average}
            />
            <p className="movie__desc">{overview}</p>
            <TitleWLine title="TRAILERS" />
            {movie?.videos.results.map((video, i) => (
              <TrailerBox
                key={i}
                videoLink={video?.key}
                title={`Play trailer ${i + 1}`}
              />
            ))}
            {!movie?.videos.results.length && <p>No Trailers available!</p>}
          </div>
        </>
      )}
    </Layout>
  );
};

export default MovieDetails;
