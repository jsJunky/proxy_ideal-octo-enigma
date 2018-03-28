var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/', proxy({
    target: 'http://bikeindex.org',
    onProxyRes(proxyResp) {
        proxyResp.headers['Access-Control-Allow-Origin'] = '*';
        console.log('headers', proxyResp.headers);
    },
    changeOrigin: false
}));
app.listen(process.env.PORT || 3000);
