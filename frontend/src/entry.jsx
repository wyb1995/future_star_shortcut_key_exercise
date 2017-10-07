import {hashHistory, IndexRedirect, Route, Router} from 'react-router';
import App from './jsx/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './jsx/home.jsx';
import Shortcut from './jsx/shortcut.jsx';

require('jquery');
require("bootstrap-webpack");

const route = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={Home}/>
        <Route path='/shortcut' component={Shortcut}/>
    </Route>
</Router>;

ReactDOM.render(
    route,
    document.getElementById("content")
);

if (module.hot) {
    module.hot.accept();
}
