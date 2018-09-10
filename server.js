const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));

const index = path.join(__dirname, 'index.html');
app.get('/', (req, res)=> res.sendFile(index));


app.listen(port, ()=> console.log(`listening on port ${port}`));
