var preferencia = require('../models/preferencia');

const crearPreferencia = async (req, res) => {
    
    const {hobbie,generoPreferido,edadMinima,edadMaxima,ciudades } = req.body;
  
    try {
      const nuevaPreferencia = await preferencia.create({ hobbie,generoPreferido,edadMinima,edadMaxima,ciudades});
      res.json(nuevaPreferencia);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la preferencia' });
    }
  };


  
  const obtenerPreferencias = async (req, res) => {
    try {
      const preferencias = await preferencia.find();
      res.json(preferencias);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las preferencias' });
    }
  };

  const actualizarpreferencia = async (req, res) => {
    const { id } = req.params;
    const { nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono } = req.body;
  
    try {
      const preferenciaActualizado = await preferencia.findByIdAndUpdate(
        id,
        { nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono },
        { new: true }
      );
      res.json(preferenciaActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la preferencia' });
    }
  };
  
  
  const eliminarpreferencia = async (req, res) => {
    const { id } = req.params;
  
    try {
      await preferencia.findByIdAndRemove(id);
      res.json({ message: 'preferencia eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la preferencia' });
    }
  };






  module.exports = {crearPreferencia,obtenerPreferencias,actualizarpreferencia,eliminarpreferencia};