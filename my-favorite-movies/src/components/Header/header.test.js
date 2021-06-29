/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  BrowserRouter
} from 'react-router-dom';
import Header from './index';

describe('Given a Header component', () => {
  test('Should return a dashboard', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByText(/LIST/i)).toBeInTheDocument();
  });
});
