const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.sendFile( path.join(__dirname, 'index.html') )
});

app.get('/api/products', (req, res, next) => {
    db.readJSON(path.join(__dirname, 'products.json'))
    .then(data => res.send(data) )
    
});

app.listen(port, () => console.log(`listening on port ${port}`));

//middleware
//app.use( './assets', express.static(path.join(__dirname,'assets')));