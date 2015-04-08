"use strict";

var proxy = require('express-http-proxy');
var url = require('url');
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/www', express.static(__dirname + '/www'));

app.use('/rss-proxy', proxy('www.aftonbladet.se', {
    forwardPath: function(req, res) {
        return url.parse(req.url).path;
    }
}));



var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
