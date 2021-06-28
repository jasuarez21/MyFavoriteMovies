import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';
import FavouritesReducer from './favouritesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  favourites: FavouritesReducer
});

export default rootReducer;
