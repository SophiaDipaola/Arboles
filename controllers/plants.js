const axios = require('axios');
var express = require('express');
const db = require('../models');
var router = express.Router();

// router.get('/', function(req, res) {
   
//       res.render('plant/index')
    
//   })
  
  router.post('/', function(req, res) {
    db.plant.create({
      name: req.body.name
    }).then(function(plant) {
      console.log('Created: ', plant.name)
      res.redirect('/plant/index')
    })
  })

  module.exports = router;