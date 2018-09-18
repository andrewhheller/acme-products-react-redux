const express = require('express');
const router = express.Router();

const { Product } = require('../db').models;


router.get('/products', (req, res, next)=> {
  Product.findAll()
    .then(products => res.send(products))
    .catch(error => next(error));
});

// router.put('/api/users/:id', (req, res, next)=> {
//   User.findById(req.params.id)
//     .then( user => user.update(req.body))
//     .then( user => res.send(user))
//     .catch(next);
// });

router.post('/products', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(error => next(error))
})

router.delete('/products/:id', (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(204))
  .catch(error => next(error));
})



module.exports = router;
