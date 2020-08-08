const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const pessoaRoute = require('./routes/pessoaRoute');
const bodyParser = require('body-parser');



app.use('/', index);
app.use('', pessoaRoute);
module.exports = app;
