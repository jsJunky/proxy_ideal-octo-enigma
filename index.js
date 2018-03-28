const express = require('express');
const axios = require('axios')

var app = express();

app.get('*', (req, res) => {
    axios.get('https://bikeindex.org' + req.url)
        .then(response => {
            console.log('response', response);
            res.json(response);
        });
});

app.listen(process.env.PORT || 3000);
