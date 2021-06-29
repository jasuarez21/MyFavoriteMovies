import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const history = useHistory();
  const handleInput = (e) => {
    setSearchedMovie(e.target.value);
  };
  const handleSearch = () => {
    history.push(`/search/${searchedMovie.toLowerCase()}`);
  };
  return (
    <header className="header">
      <nav className="header__navigation">
        <img className="header__navigation--logo" src="https://i.postimg.cc/NjcqHPbp/icons8-movie-projector-100.png" alt="MyFavouritosMovies" />
        <Link className="header__navigation--link" to="/favourites">
          FAVOURITES
        </Link>
        <Link className="header__navigation--link" to="/">
          LIST
        </Link>
      </nav>
      <input type="text" placeholder="Insert movie" className="header__navigation--input" onChange={handleInput} />
      <button type="button" className="header__navigation--button" onClick={handleSearch}>
        <img src="https://i.postimg.cc/J7XwkXXs/icons8-search-48.png" alt="Search" />
      </button>
    </header>
  );
};

export default Header;
