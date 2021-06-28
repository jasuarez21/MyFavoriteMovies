import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import List from './components/List';
import Detail from './components/Detail';
import Favorites from './components/Favorites';

function App() {
  return (
    <Provider store={configureStore()}>
      <List />
      <Detail />
      <Favorites />
    </Provider>
  );
}

export default App;
