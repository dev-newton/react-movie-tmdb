import { GET_MOVIES, GET_MOVIE_BY_ID } from "../actions/types";

const initialState = {
  movies: [],
  movie: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}
