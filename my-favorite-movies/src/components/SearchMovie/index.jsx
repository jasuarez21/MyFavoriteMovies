/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '../Movies/List';

const SearchMovie = () => {
  const { infoMovieSearched } = useParams();
  const movies = useSelector((store) => store.movies);
  const filterWithTitle = (movie) => movie.title.toLowerCase().includes(infoMovieSearched);
  const filteredMovies = movies.filter((movie) => filterWithTitle(movie));
  return (
    <>
      <h3 className="title">Your search</h3>
      <List movies={filteredMovies} />
    </>
  );
};

export default SearchMovie;
