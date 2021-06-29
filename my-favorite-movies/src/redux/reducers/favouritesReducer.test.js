import favouritesReducer from './favouritesReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a favouritesReducer function', () => {
  test('Should return and array with favourites movies', () => {
    const favourites = [];
    const action = { type: actionTypes.ADD_TO_FAVORITES, movie: 'Some movie' };
    const returnFunc = favouritesReducer(favourites, action);
    const expectTo = [action.movie];
    expect(returnFunc).toEqual(expectTo);
  });
});
