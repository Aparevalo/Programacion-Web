const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  nombreCliente: String,
  fecha: Date,
  hora: String,
  tipo: String,
  doctor: String,
  
});

const Turno = mongoose.model('Turno', turnoSchema);

module.exports = Turno;


