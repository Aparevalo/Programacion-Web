//Rastrear las ventas de una empresa, incluyendo detalles sobre productos vendidos, fechas, montos y clientes.

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const conexion = require('./config/conexion');
const ruta=require('./router/router');

app.use(bodyParser.json());
app.use('/',ruta);
app.listen(3000, () => {
  console.log("Servidor iniciado");
 
});


