const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const apiProducts = require('./api/products');

app.use(bodyParser.json());
app.use('/dist', express.static(path.join(__dirname, "..", 'dist')));
app.use('/api', apiProducts);


const index = path.join(__dirname, "..", 'index.html');

app.get('/', (req, res, next) => {
  res.sendFile(index);
});

app.use((err, req, res, next)=> {
  res.status(500).send({ error: err.message });
});




module.exports = app;
