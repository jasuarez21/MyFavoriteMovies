import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import './styles/listMovies.css';

const List = ({ movies }) => (
  <ul className="movie-list">
    {
    movies.map((movie) => <Movie movie={movie} showDetails={false} />)
        }
  </ul>
);

List.propTypes = {
  movies: PropTypes.shape([{
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
  }]).isRequired
};

export default List;
