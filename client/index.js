import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import history from './history'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <Provider store={store}>
    <ParallaxProvider>
      <Router history={history}>
        <App />
      </Router>
    </ParallaxProvider>
  </Provider>,
  document.getElementById('app')
)
