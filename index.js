var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/', proxy({
    target: 'http://bikeindex.org',
    onProxyRes(proxyResp) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    },
    changeOrigin: true
}));
app.listen(process.env.PORT);
