/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import MovieDetail from './MovieDetail';
import { render, screen } from '../../utils/test-util';

const favourites = [
  {
    title: 'Some movie',
    poster_path: '',
    overview: 'Description',
    id: 1
  }
];
const selectedMovie = {
  title: 'Some movie',
  poster_path: '',
  overview: 'Description',
  id: 1
};

describe('Given and MovieDetail component', () => {
  test('Should return a Detail of movie selected', () => {
    render(<MovieDetail movie={selectedMovie} />, {
      initialState: {
        favourites
      }
    });
    expect(screen.getByText(/Some movie/i)).toBeInTheDocument();
  });
});
