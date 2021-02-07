import { createContext, useEffect, useReducer } from "react";
import moviesReducer from "./moviesReducer";
import { getMovies } from "../../helpers/crud";

export const movieContext = createContext();

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID";
export const GET_CHARACTERS = "GET_CHARACTERS";

const MovieWrapper = ({ children }) => {
  const initialState = {
    movies: [],
    movie: {},
    characters: []
  };

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies("/movie/popular");
      if (Object.keys(movies).length !== 0) {
        dispatch({
          type: GET_MOVIES,
          payload: movies.results
        });
      }
    };
    fetchMovies();
  }, []);

  const getMovieById = payload => {
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload
    });
  };

  const getCharacters = payload => {
    dispatch({
      type: GET_CHARACTERS,
      payload
    });
  };

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        characters: state.characters,
        getMovieById,
        getCharacters
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MovieWrapper;
