var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config');
var history = require('connect-history-api-fallback');
var proxy = require('http-proxy-middleware');

var app = express();
var compiler = webpack(config);

app.use(history());
app.use(proxy('/api', {target: 'http://localhost:8080', changeOrigin: true}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    publicPath: config.output.publicPath
}));

app.use(express.static('./src'));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});