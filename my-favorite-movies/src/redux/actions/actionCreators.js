import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadMovies() {
  return async (dispatch) => {
    try {
      const { data } = await axios();
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        movies: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_MOVIES_ERROR'
      });
    }
  };
}
