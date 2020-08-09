const express = require('express');
const router = express.Router();
const controller = require('../controllers/pessoaController')
/* router.post('', controller.post);   //Esse trecho vai mandar para o controller fazer as operações 
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/', controller.get); */
var models  = require('../../models');
const { pessoa } = require('../../models'); //Definindo que toda pessoa seqgue esse model

router.post('/pessoa', function(req, res) {
    models.pessoa.create(
      req.body
     ).then(function(pessoa) {
      res.send(pessoa);
    }).catch(function(error){
      res.status(400).send(error);
    });
  });
  
  /* app.post('/register', async (req, res) => {//post = criar
    const pessoa = await Pessoa.create(req.body); // A pessoa que vier do servideor vai estar no req.body
    res.json(pessoa);
  }); */

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
  