import axios from "axios";
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
/* eslint-disable import/no-anonymous-default-export */
export default {
  url: REACT_APP_API_URL,
  headers() {
    let header = {};
    header["Accept"] = "*/*";

    return header;
  },

  getMoviesData(loadMore, page) {
    return axios({
      method: "get",
      url: `${
        this.url
      }movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${
        loadMore && page + 1
      }`,
    });
  },
};
