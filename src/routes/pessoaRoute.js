const express = require('express');
const router = express.Router();
const controller = require('../controllers/pessoaController')
/* router.post('', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/', controller.get); */
var models  = require('../../models');

router.post('/pessoa', function(req, res) {
    models.pessoa.create(
      req.body
     ).then(function(pessoa) {
      res.send(pessoa);
    }).catch(function(error){
      res.status(400).send(error);
    });
  });
  
  router.put('/pessoa/:id', function(req, res) {
    models.pessoa.findById(
      req.params.id
    ).then(function(pessoa){
      pessoa.update(
        req.body
      ).then(function(pessoa){
        res.send(pessoa);
      });
    });
  });
  
  router.delete('/pessoa/:id', function(req, res) {
    models.pessoa.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.send({});
    });
  });
  
  router.get('/pessoa', function(req, res) {
    models.pessoa.findAll(
    ).then(function(pessoa) {
      res.send(pessoa);
    });
  });
  
  
  module.exports = router;
  