require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const db = require('./models');
const port = process.env.PORT || 3000;
const router = express.Router()

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

// GET / - main index of site
app.get('/', function(req, res) {
  const botanicalUrl = 'https://trefle.io/api/v1/plants?token=-iiZCn_-b4dUknLykvG1EYr51e3aRDg4XtbyDyVeUnk';
  // Use request to call the API
  axios.get(botanicalUrl).then( function(apiResponse) {
    const plants = apiResponse.data.common_name
    console.log(plants)
    res.render('index', { plants: plants });
  })
});

// Imports all routes from the pokemon routes file
app.use('/plants', require('./controllers/plants'));

var server = app.listen(port, function() {
  console.log('...listening on', port );
});

module.exports = server;
