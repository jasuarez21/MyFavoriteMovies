/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

function favouritesReducer(favourites = [], action) {
  let updateFavourites = [...favourites];
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      const isFavouriteMovie = favourites.find((movie) => movie.id === action.movie.id);
      if (isFavouriteMovie) {
        updateFavourites = favourites.filter((movie) => movie.id !== action.movie.id);
        return updateFavourites;
      }
      return [
        ...updateFavourites,
        action.movie
      ];

    default:
      return updateFavourites;
  }
}

export default favouritesReducer;
