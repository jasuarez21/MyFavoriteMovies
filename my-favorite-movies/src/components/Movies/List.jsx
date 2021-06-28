import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const List = ({ movies }) => (
  <ul>
    {
          movies.map((movie) => <Movie movie={movie} />)
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
