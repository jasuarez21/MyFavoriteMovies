/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Detail from './index';
import { render, screen } from '../../utils/test-util';

const movies = [
  {
    title: 'Some movie',
    poster_path: '',
    overview: 'Description'
  }
];

describe('Given a Detail component', () => {
  test('Should return and a MovieDetail', () => {
    render(<Detail />, {
      initialState: {
        movies
      }
    });
    expect(screen.getByText(/Movie is not defined/i)).toBeInTheDocument();
  });
});
