import TwoColGrid from "components/TwoColGrid/TwoColGrid";
import Layout from "layout/Layout";
import Spinner from "components/Spinner/Spinner";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";

import useMovie from "./hook/useMovie";

const Movies = () => {
  const { renderItems, loading, page, total_pages, fetchItems } = useMovie();

  return (
    <Layout navTitle="Pop Movies">
      <div className="home__grid">
        <TwoColGrid>{renderItems}</TwoColGrid>
        {loading && <Spinner />}
        {page < total_pages && !loading && (
          <LoadMoreBtn onClick={() => fetchItems(true)} text="Load More" />
        )}
      </div>
    </Layout>
  );
};

export default Movies;
