import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <>
    <li>
      <div>
        <h3>{movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <p>{movie.overview}</p>
      </div>
    </li>
  </>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
  }).isRequired
};
export default Movie;
