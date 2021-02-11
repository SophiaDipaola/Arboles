
const db = require('./models')

db.plant.create({
    name: 'pikachu'
  }).then(function(plant) {
    console.log('Created: ', plant.name)
  })
  
  db.plant.findAll().then(function(plant) {
    console.log('Found: ', plant)
  })