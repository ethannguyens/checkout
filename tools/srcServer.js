import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';


let fs = require('fs');
let http = require('http');
let https = require('https');
// let privateKey  = fs.readFileSync(path.join( __dirname, '../localhost-ssl/key.pem'));
// let certificate = fs.readFileSync(path.join( __dirname, '../localhost-ssl/cert.pem'));
// let ca = fs.readFileSync(path.join( __dirname, '../localhost-ssl/Certificates.pem'));

let credentials = {requestCert: false,
  rejectUnauthorized: false};
/* eslint-disable no-console */
process.env.NODE_ENV = 'dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3003);
open(`https://localhost:${3003}`);

// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`http://localhost:${port}`);
//   }
// });

