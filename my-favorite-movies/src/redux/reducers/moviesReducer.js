import actionTypes from '../actions/actionTypes';

function moviesReducer(movies = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      return action.movies;

    case actionTypes.DELETE_MOVIE_TO_CART:
      return movies.filter((movie) => movie.id !== action.movieId);

    case actionTypes.ADD_TO_FAVORITES:
      return [
        ...movies,
        action.movie
      ];

    default:
      return movies;
  }
}

export default moviesReducer;
