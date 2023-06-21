const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personaController');
router.use('/personas', personasController);
module.exports = router;
