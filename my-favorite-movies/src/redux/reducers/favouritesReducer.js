import actionTypes from '../actions/actionTypes';

function favouritesReducer(favourites = [], action) {
  switch (action.type) {
    case actionTypes.DELETE_MOVIE_FROM_FAVORITES:
      return favourites.filter((movie) => movie.id !== action.movieId);

    case actionTypes.ADD_TO_FAVORITES:
      return [
        ...favourites,
        action.movie
      ];

    default:
      return favourites;
  }
}

export default favouritesReducer;
