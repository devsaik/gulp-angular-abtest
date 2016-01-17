/**
 * Created by rca733 on 1/16/16.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();
var morgan = require('morgan');
var logger = morgan('combined');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
