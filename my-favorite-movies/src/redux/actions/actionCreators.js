import axios from 'axios';
import actionTypes from './actionTypes';

export function loadMovies() {
  return async (dispatch) => {
    try {
      const { data } = await axios('https://api.themoviedb.org/3/movie/popular?api_key=2cd571faf863b38d611ebf6905a846a1');
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        movies: data.results
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_MOVIES_ERROR'
      });
    }
  };
}

export function toggleFavourites(movie) {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    movie
  };
}
