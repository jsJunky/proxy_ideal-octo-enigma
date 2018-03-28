const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('*', (req, res) => {
    axios.get('https://bikeindex.org' + req.url)
        .then(response => {
            res.json(response.data);
        });
});

app.listen(process.env.PORT || 3000);
