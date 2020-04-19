const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = config.devServer;

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const devServer = new webpackDevServer(compiler, options);

devServer.listen(5000, 'localhost', () => {
  console.log('dev devServer listening on port 5000');
});
