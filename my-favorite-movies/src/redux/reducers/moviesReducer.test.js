import moviesReducer from './moviesReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a favouritesReducer function', () => {
  test('Should return and array with favourites movies', () => {
    const movies = [];
    const action = { type: actionTypes.LOAD_MOVIES, movies: 'Some movie' };
    const returnFunc = moviesReducer(movies, action);
    const expectTo = action.movies;
    expect(returnFunc).toEqual(expectTo);
  });
});
