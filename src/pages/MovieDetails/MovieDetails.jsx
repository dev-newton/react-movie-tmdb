import Header from "components/Header/Header";
import MovieBox from "components/MovieBox/MovieBox";
import TitleWLine from "components/TitleWLine/TitleWLine";
import Layout from "layout/Layout";
import TrailerBox from "components/TrailerBox/TrailerBox";
import Spinner from "components/Spinner/Spinner";
import "./MovieDetails.css";

import useMovieDetails from "./hook/useMovieDetails";

const { REACT_APP_IMAGE_BASE_URL, REACT_APP_POSTER_SIZE } = process.env;

const MovieDetails = () => {
  const {
    original_title,
    poster_path,
    overview,
    runtime,
    release_date,
    vote_average,
    loading,
    movie,
  } = useMovieDetails();

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
            {movie?.videos?.results.map((video, i) => (
              <TrailerBox
                key={i}
                videoLink={video?.key}
                title={`Play trailer ${i + 1}`}
              />
            ))}
            {!movie?.videos?.results.length && <p>No Trailers available!</p>}
          </div>
        </>
      )}
    </Layout>
  );
};

export default MovieDetails;
