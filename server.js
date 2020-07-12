const { animals } = require('./data/animals');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes'); // Will read the index.js
const htmlRoutes = require('./routes/htmlRoutes'); // Will read the index.js
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

//MIDDLEWARE - always use when server deals with a front end and JSON data
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// tells server the router we set up - serve back HTML routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// get request for links in this folder (like css and js)
app.use(express.static('public'));

//Port
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});