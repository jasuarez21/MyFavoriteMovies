import React from 'react';
import { useSelector } from 'react-redux';
import List from '../Movies/List';
import './favourites.css';

const Favourites = () => {
  const favourites = useSelector((store) => store.favourites);
  return (
    <section className="favourites">
      <h3 className="favourites__title">My Favourites</h3>
      <List movies={favourites} />
    </section>
  );
};

export default Favourites;
