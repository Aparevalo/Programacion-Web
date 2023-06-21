var Persona = require('../models/persona');
var express = require('express');
var router = express.Router();

router.post('/crearPersona', async (request, response) => {
  try {
    var body = request.body;
    await Persona.insertMany({
      nombres: body.nombres,
      apellidos: body.apellidos,
      edad: body.edad,
      genero: body.genero,
      estadoCivil: body.estadoCivil,
      descripcion: body.descripcion,
      telefono: body.telefono
    });
    response.status(200).json('Persona creada correctamente');
  } catch (err) {
    console.log(err);
    response.status(500).json('Ocurrió un error al crear la persona');
  }
});

module.exports = router;
