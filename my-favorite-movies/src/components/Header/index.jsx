import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const history = useHistory();
  const handleInput = (e) => {
    setSearchedMovie(e.target.value);
  };
  const handleSearch = () => {
    history.push(`/search/${searchedMovie}`);
  };
  return (
    <header>
      <Link to="/favourites">
        FAVOURITES
      </Link>
      <Link to="/">
        LIST
      </Link>
      <input type="text" placeholder="Insert movie" className="movie-list__input" onChange={handleInput} />
      <button type="button" onClick={handleSearch}>
        <img src="https://i.postimg.cc/J7XwkXXs/icons8-search-48.png" alt="Search" />
      </button>
    </header>
  );
};

export default Header;
