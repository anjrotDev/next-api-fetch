import { GET_MOVIES, GET_CHARACTERS, GET_MOVIE_BY_ID } from "./moviesContext";

const moviesReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_MOVIE_BY_ID:
      return { ...state, movie: action.payload };
    case GET_CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
