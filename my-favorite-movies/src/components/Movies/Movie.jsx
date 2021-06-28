/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleFavourites } from '../../redux/actions/actionCreators';
import './styles/movies.css';

const Movie = ({ movie, showDetails }) => {
  const favourites = useSelector((store) => store.favourites);
  const dispatch = useDispatch();
  const handleFavourite = () => {
    dispatch(toggleFavourites(movie));
  };
  const checkIsFavouriteMovie = (movieId) => favourites.find((item) => item.id === movieId);
  return (
    <li className="movie">
      <Link className="movie__link" to={`/${movie.id}`}>
        <div>
          <h3>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          {
            showDetails && (
              <p>{movie.overview}</p>
            )
          }
        </div>
      </Link>
      <button type="button" onClick={() => handleFavourite(movie)}>
        <img
          src={
          checkIsFavouriteMovie(movie.id) ? (
            'https://i.postimg.cc/MpWYzkxW/icons8-love-30.png'
          ) : (
            'https://i.postimg.cc/7ZM0G5B0/icons8-love-48.png'
          )
        }
          alt="Favourite"
        />
      </button>
    </li>
  );
};

Movie.propTypes = {
  showDetails: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};
export default Movie;
