/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import MoviesList from '../index';

jest.mock('react-redux', () => {
  const ActualRedux = jest.requireActual('react-redux');
  return {
    ...ActualRedux,
    useSelector: () => ({
      movies: [
        { title: 'Some movie' },
        { title: 'Other movie' }
      ]
    }),
    useDispatch: () => (jest.fn())
  };
});

describe('Given and MovieList component', () => {
  test('Should return a List of movies', () => {
    const { container } = render(<MoviesList />);
    const movieList = container.querySelectorAll('.movie__list')[0];
    expect(movieList).toBeInTheDocument();
  });
});
