import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/favourites">
      FAVOURITES
    </Link>
    <Link to="/">
      LIST
    </Link>
    <input type="text" placeholder="Insert movie" className="movie-list__input" />
  </header>
);

export default Header;
