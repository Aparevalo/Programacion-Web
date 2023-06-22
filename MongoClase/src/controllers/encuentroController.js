var persona = require('../models/persona');
var encuentro = require('../models/encuentro');

const crearEncuentro = async (req, res) => {
  const { personaA, personaB, lugar, latitud, longitud } = req.body;

  try {
    const personaAId = await persona.findById(personaA);
    const personaBId = await persona.findById(personaB);

    if (!personaAId || !personaBId) {
      return res.status(404).json({ error: 'No se encontró una o ambas personas' });
    }

    const cEncuentro = {personaA: personaAId,personaB: personaBId,lugar,latitud,longitud};

    const nuevoEncuentro = await encuentro.create(cEncuentro);

    res.json(nuevoEncuentro);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el encuentro' });
  }
};

const obtenerEncuentros = async (req, res) => {
  try {
    const encuentros = await encuentro.find();
    res.json(encuentros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las encuentros' });
  }
};

const actualizarEncuentro = async (req, res) => {
  const { id } = req.params;
  const { nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono } = req.body;

  try {
    const encuentroActualizado = await encuentro.findByIdAndUpdate(
      id,
      { nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono },
      { new: true }
    );
    res.json(encuentroActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la encuentro' });
  }
};


const eliminarEncuentro = async (req, res) => {
  const { id } = req.params;

  try {
    await encuentro.findByIdAndRemove(id);
    res.json({ message: 'encuentro eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la encuentro' });
  }
};
  

  module.exports ={crearEncuentro,obtenerEncuentros,eliminarEncuentro,actualizarEncuentro};

