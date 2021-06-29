/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleFavourites } from '../../redux/actions/actionCreators';
import './detail.css';

const MovieDetail = ({ movie }) => {
  const favourites = useSelector((store) => store.favourites);
  const dispatch = useDispatch();
  const handleFavourite = () => {
    dispatch(toggleFavourites(movie));
  };
  const checkIsFavouriteMovie = (movieId) => favourites.find((item) => item.id === movieId);
  return (
    <section className="movie-detail">
      <header className="movie-detail__header">
        <h3 className="movie-detail__header--title">{movie.title}</h3>
        <button type="button" className="movie-detail__header--button" onClick={() => handleFavourite(movie)}>
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
      </header>
      <section className="movie-detail__information">
        <img className="movie-detail__information--image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className="movie-detail__text">
          <p className="movie-detail__text--title">Release date</p>
          <p className="movie-detail__text--date">{movie.release_date}</p>
          <p className="movie-detail__text--title">Description</p>
          <p className="movie-detail__text--overview">{movie.overview}</p>
        </div>
      </section>
    </section>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};
export default MovieDetail;
