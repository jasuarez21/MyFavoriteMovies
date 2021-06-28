import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import List from './List';
import { loadMovies } from '../../redux/actions/actionCreators';
import './list.css';

const MoviesList = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <section className="movie_list">
      <h3 className="movie_list__title">List of all movies</h3>
      <input type="text" placeholder="Insert movie" className="movie-list__input" />
      <Link to="/favourites">
        FAVS
      </Link>
      <ul className="movie-list__movies">
        {
          movies.length && (
          <List movies={movies} />
          )
        }
      </ul>
    </section>
  );
};

export default MoviesList;
