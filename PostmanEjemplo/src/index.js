const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const conexion = require('./config/config');
const ruta=require('./router/router');

app.use(bodyParser.json());
app.use('/',ruta);
app.listen(5000, () => {
  console.log("Servidor iniciado");
 
});
