/*eslint no-console: "off"*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import apiRouter from './api/index.js';
import bodyParse from 'body-parser';
const cookieParser = require('cookie-parser');
const app = express();
const compiler = webpack(webpackConfig);
var port = process.env.PORT || 3000;
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cookieParser());
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));
app.use(express.static('./src'));
app.use('/api', apiRouter);
if (require.main === module) {
    app.listen(port, function () {
        console.log('Listening on 3000');
    });
}
