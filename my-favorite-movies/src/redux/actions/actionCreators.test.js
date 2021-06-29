import axios from 'axios';
import actionTypes from './actionTypes';
import { loadMovies, toggleFavourites } from './actionCreators';

jest.mock('axios');

describe('Given loadMovies function', () => {
  test('Should dispatch to have been called', async () => {
    const dispatch = jest.fn();
    axios.mockResolvedValueOnce({
      data: {
        results: []
      }
    });
    await loadMovies()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given toggleFavourites function', () => {
  test('Should return and object with actionType and movie', () => {
    const movie = { title: 'One movie' };
    const result = toggleFavourites(movie);
    const expectedResult = {
      type: actionTypes.ADD_TO_FAVORITES,
      movie
    };
    expect(result).toEqual(expectedResult);
  });
});
