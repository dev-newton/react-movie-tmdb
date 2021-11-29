import { GET_MOVIES, GET_MOVIE_BY_ID } from "./types";

import apiService from "../../services/apiService";

export const getMovies = (loadMore, currentPage) => async (dispatch) => {
  try {
    const response = await apiService.getMoviesData(loadMore, currentPage);
    dispatch({
      type: GET_MOVIES,
      payload: response.data,
    });
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    const response = await apiService.getMoviesDataById(id);
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    throw error.response.data.message;
  }
};
