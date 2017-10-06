import {hashHistory, IndexRedirect, Route, Router} from 'react-router';
import App from './jsx/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

require('jquery');
require("bootstrap-webpack");

const route = <Router history={hashHistory}>
  <Route path="/" component={App}>
  </Route>
</Router>;

ReactDOM.render(
  route,
  document.getElementById("content")
);

if (module.hot) {
  module.hot.accept();
}
