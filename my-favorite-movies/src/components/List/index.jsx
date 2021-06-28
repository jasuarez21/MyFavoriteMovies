import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadMovies from '../../redux/actions/actionCreators';
import './list.css';

const List = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <section className="movie_list">
      <h3 className="movie_list__title">List of all movies</h3>
      <input type="text" placeholder="Insert movie" className="movie-list__input" />
      <ul className="movie-list__movies">
        {
          movies.map((movie) => <li>{movie.title}</li>)
        }
      </ul>
    </section>
  );
};

export default List;
