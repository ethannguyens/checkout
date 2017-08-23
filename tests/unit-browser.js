const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const path = require(path);
const config = require('../webpack.tests.config');
const open = require("open");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, "/"),
  // webpack-dev-server options
  hot: true,
  historyApiFallback: false,
  compress: true,
  clientLogLevel: "info",
  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: true,
  filename: "test.build.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // It's a required option.
  publicPath: "/tests/",
  headers: {"X-Custom-Header": "yes"},
  stats: {colors: true},
});

server.listen(3003, "localhost", function () {
  open("http://localhost:3003/webpack-dev-server/test.html");
});

