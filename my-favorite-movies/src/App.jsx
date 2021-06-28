import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import List from './components/Movies';
import Detail from './components/Detail';
import Favourites from './components/Favourites/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/:movieId" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
