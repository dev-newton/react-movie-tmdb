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

  return (
    <Layout navTitle="Movie details">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header title={movie?.original_title} />
          <div className="wrapper">
            <MovieBox
              image={`${REACT_APP_IMAGE_BASE_URL}${REACT_APP_POSTER_SIZE}${movie?.poster_path}`}
              year={movie?.release_date}
              duration={movie?.runtime}
              rating={movie?.vote_average}
            />
            <p className="movie__desc">{movie?.overview}</p>
            <TitleWLine title="TRAILERS" />
            {movie?.videos.results.map((video, i) => (
              <TrailerBox
                key={i}
                videoLink={video?.key}
                title={`Play trailer ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default MovieDetails;
