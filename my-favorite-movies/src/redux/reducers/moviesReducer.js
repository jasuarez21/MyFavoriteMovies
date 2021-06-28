import actionTypes from '../actions/actionTypes';

function moviesReducer(movies = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      return action.movies;

    default:
      return movies;
  }
}

export default moviesReducer;
