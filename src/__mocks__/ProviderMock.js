import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reducer from '../reducer';

const initialState = {
  user: {user:'user test'},
  teams: [],
};

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = (props) => (
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

module.exports = ProviderMock;
