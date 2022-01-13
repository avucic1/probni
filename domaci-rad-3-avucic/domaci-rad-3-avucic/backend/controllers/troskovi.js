const express = require('express');
const troskoviRouter=express.Router();
const Trosak=require('../models/trosak')


troskoviRouter.get('/', (req, res) => {
  Trosak.find({}).then(rezultat => {    
    res.json(rezultat)
  })
})


troskoviRouter.get('/:id', (req, res, next) => {
    Trosak.findById(req.params.id)
      .then(trosak => {
        if (trosak) {
          res.json(trosak)
        } else {
          res.status(404).end()
        }
  
      })
      .catch(err => next(err))
  })

  troskoviRouter.delete('/:id', (req, res) => {
    Trosak.findByIdAndRemove(req.params.id)
      .then(result => {
        res.status(204).end()
      })
      .catch(err => next(err))
  })
  
  troskoviRouter.put('/:id', (req, res) => {
    const podatak = req.body
    const id = req.params.id
  
    const trosak = new Poruka({
        opis: podatak.opis,
        iznos: podatak.iznos,
        datum: new Date(),
        vrsta:podatak.vrsta
      })
  
    Trosak.findByIdAndUpdate(id,trosak, {new: true})
    .then( noviTrosak => {
      res.json(noviTrosak)
    })
    .catch(err => next(err))
  
  })
  
  troskoviRouter.post('/', (req, res, next) => {
    const podatak = req.body
  
    const trosak = new Trosak({
      opis: podatak.opis,
      iznos: podatak.iznos,
      datum: new Date(),
      vrsta:podatak.vrsta
    })
  
    trosak.save()
    .then(spremljenTrosak=> {
      res.json(spremljenTrosak)
    })
    .catch(err => next(err))
  })
  
  module.exports = troskoviRouter