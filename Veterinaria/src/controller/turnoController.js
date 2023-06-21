const Turno = require('../model/turno');

// Obtener todos los turnos pendientes
const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los turnos' });
  }
};

// Crear un nuevo turno
const crearTurno = async (req, res) => {
  const {nombreCliente, fecha, hora, tipo, doctor } = req.body;

  try {
    const nuevoTurno = await Turno.create({ nombreCliente, fecha, hora, tipo, doctor });
    res.json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el turno' });
  }
};

// Actualizar un turno existente
const actualizarTurno = async (req, res) => {
  const { id } = req.params;
  const { nombreCliente, fecha, hora, tipo, doctor } = req.body;

  try {
    const turnoActualizado = await Turno.findByIdAndUpdate(
      id,
      { nombreCliente, fecha, hora, tipo, doctor },
      { new: true }
    );
    res.json(turnoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el turno' });
  }
};

// Eliminar un turno existente
const eliminarTurno = async (req, res) => {
  const { id } = req.params;

  try {
    await Turno.findByIdAndRemove(id);
    res.json({ message: 'Turno eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el turno' });
  }
};

module.exports = {obtenerTurnos,crearTurno,actualizarTurno,eliminarTurno};