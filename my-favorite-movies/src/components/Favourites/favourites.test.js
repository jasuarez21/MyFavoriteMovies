/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Favourites from './index';
import { render, screen } from '../../utils/test-util';

const favourites = [
  {
    title: 'Some movie',
    poster_path: '',
    overview: 'Description'
  }
];

describe('Given and Favourites component', () => {
  test('Should return and favourites list', () => {
    render(<Favourites />, {
      initialState: {
        favourites
      }
    });
    expect(screen.getByText(/Some movie/i)).toBeInTheDocument();
  });
});
