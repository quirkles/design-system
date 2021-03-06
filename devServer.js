const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = config.devServer;

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, options);

devServer.listen(5000, 'localhost', () => {
  console.log('dev devServer listening on port 5000');
});
