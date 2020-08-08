const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Teste server");
})

app.get("/pessoa", function(req, res){
    res.send("Teste server diretorio pessoa");
})

//localhost:8080
app.listen(8080);