import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from './history'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <ParallaxProvider>
    <Router history={history}>
      <App />
    </Router>
  </ParallaxProvider>,
  document.getElementById('app')
);
