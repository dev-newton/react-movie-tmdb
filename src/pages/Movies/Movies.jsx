import { useEffect, useState } from "react";

import Thumbnail from "components/Thumbnail/Thumbnail";
import TwoColGrid from "components/TwoColGrid/TwoColGrid";
import Layout from "layout/Layout";
import Spinner from "components/Spinner/Spinner";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";

import apiService from "services/apiService";

const { REACT_APP_IMAGE_BASE_URL, REACT_APP_POSTER_SIZE } = process.env;

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchItems = async (loadMore) => {
    setLoading(true);
    try {
      const response = await apiService.getMoviesData(loadMore, currentPage);

      setLoading(false);
      setMovies([...movies, ...response.data.results]);
      setCurrentPage(response.data.page);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // Function to get movies data
    fetchItems(false);
    // eslint-disable-next-line
  }, []);

  return (
    <Layout navTitle="Pop Movies">
      <div className="home__grid">
        <TwoColGrid>
          {movies.map((element, i) => (
            <Thumbnail
              key={i}
              image={
                element.poster_path &&
                `${REACT_APP_IMAGE_BASE_URL}${REACT_APP_POSTER_SIZE}${element.poster_path}`
              }
              movieId={element.id}
              movieName={element.original_title}
            />
          ))}
        </TwoColGrid>
        {loading && <Spinner />}
        {currentPage < totalPages && !loading && (
          <LoadMoreBtn onClick={() => fetchItems(true)} text="Load More" />
        )}
      </div>
    </Layout>
  );
};

export default Movies;
