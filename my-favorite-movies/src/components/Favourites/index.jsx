import React from 'react';
import { useSelector } from 'react-redux';
import List from '../Movies/List';

const Favourites = () => {
  const favourites = useSelector((store) => store.favourites);
  return (
    <>
      <h3>My Favourites</h3>
      <List movies={favourites} />
    </>
  );
};

export default Favourites;
