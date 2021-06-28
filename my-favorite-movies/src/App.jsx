import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import List from './components/Movies';
import Detail from './components/Detail';
import Favourites from './components/Favourites';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/:movieId" exact component={Detail} />
          <Route path="/favourites" exact component={Favourites} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
