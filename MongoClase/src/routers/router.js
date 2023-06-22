const express = require('express');
const router = express.Router();
const {crearPersona, obtenerPersona , obtenerPersonas, eliminarPersona, actualizarPersona} = require('../controllers/personaController');
const {crearPreferencia,obtenerPreferencias,actualizarpreferencia,eliminarpreferencia} = require('../controllers/preferenciasController');
const {crearEncuentro,obtenerEncuentros,eliminarEncuentro,actualizarEncuentro} = require('../controllers/encuentroController');

//Rutas Personas
router.get('/personas', obtenerPersonas);
router.post('/personas', crearPersona);
router.get('/personas/:id', obtenerPersona);
router.put('/personas/:id', actualizarPersona);
router.delete('/personas/:id', eliminarPersona);


//Rutas Preferencias
router.get('/preferencias', obtenerPreferencias);
router.post('/preferencias', crearPreferencia);
router.put('/preferencias/:id', actualizarpreferencia);
router.delete('/preferencias/:id', eliminarpreferencia);


//Rutas Encuentros
router.get('/encuentros', obtenerEncuentros);
router.post('/encuentros', crearEncuentro);
router.put('/encuentros/:id', actualizarEncuentro);
router.delete('/encuentros/:id', eliminarEncuentro);


module.exports = router;
