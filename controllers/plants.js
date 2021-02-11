const axios = require('axios');
var express = require('express');
const db = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
   db.plant.findAll().then((plants)=>{
    res.render('/plants',{plant:plants})

   })
    
  })
  
  router.post('/', function(req, res) {
    db.plant.create({
      name: req.body.name
    }).then(function(plant) {
      console.log('Created: ', plants.name)
      res.redirect('/plants')
    })
    .catch(err=>{
      console.log(err)
    })
  })


// router.get('/',(req,res)=>{
//   console.log(plant)
//   res.render('/plant/plants', {plant})
// })


router.get('/:id',function(req,res){
  let statsEndPoint = 'https://trefle.io/api/v1/plants?${req.params.id}token=-iiZCn_-b4dUknLykvG1EYr51e3aRDg4XtbyDyVeUnk'
  axios.get(statsEndPoint).then(function(apiStatsResponse){
    let statsApi = apiStatsResponse.data
    console.log(statsApi)
    res.render('plants/stats' ,{plants:statsApi})
  })
})

  module.exports = router;