/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Movie from '../Movies/Movie';

const Detail = () => {
  const [movieSelected, setMovieSelected] = useState();
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const { movieId } = useParams();
  useEffect(() => {
    if (movies.length) {
      setMovieSelected(movies.find((movie) => movie.id === +movieId));
    }
  }, [movies]);
  return (
    <div>
      {
        movieSelected ? (
          <Movie movie={movieSelected} showDetails />
        ) : (
          <h3>Movie is not defined</h3>
        )
      }
    </div>
  );
};

export default Detail;
