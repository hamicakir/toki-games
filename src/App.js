import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './reducers/createStore';
import './App.scss';

import Layout from './containers/Layout';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
