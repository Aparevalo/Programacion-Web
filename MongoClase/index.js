const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const conexion = require('./conexion');

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Servidor iniciado");
 
});
