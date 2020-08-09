const express = require('express');
const router = express.Router();
var models  = require('../../models');



router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Server rodando localhost:3000"
    });
});

router.get('', function(req, res) {
    models.pessoa.findAll(
    ).then(function(pessoa) {
      res.send(pessoa);
    });
});

module.exports = router;

