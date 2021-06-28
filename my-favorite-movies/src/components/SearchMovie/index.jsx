/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '../Movies/List';

const SearchMovie = () => {
  const { infoMovieSearched } = useParams();
  const movies = useSelector((store) => store.movies);
  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(infoMovieSearched.toLowerCase()));
  return (
    <List movies={filteredMovies} />
  );
};

export default SearchMovie;
