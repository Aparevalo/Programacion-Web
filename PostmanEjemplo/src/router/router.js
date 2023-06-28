const express = require('express');
const router = express.Router();
const {crearVehiculo,obtenerVehiculos} = require('../controller/vehiculoController');

router.post('/vehiculo', crearVehiculo);
router.get('/vehiculo', obtenerVehiculos);

module.exports = router;

