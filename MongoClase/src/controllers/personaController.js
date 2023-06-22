var persona = require('../models/persona');

const crearPersona = async (req, res) => {
  
    const {nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono} = req.body;
  
    try {
      const nuevaPersona = await persona.create({ nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono});
      res.json(nuevaPersona);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la persona' });
    }
  };

  
  const obtenerPersona = async (req, res) => {
    const { id } = req.params;
  
    try {
      const personaId = await persona.findByIdAndRemove(id);
  
      if (!personaId) {
        return res.status(404).json({ error: 'Persona no encontrada' });
      }
      
      
    } catch (error) {
      res.status(500).json({ error: 'Error al encontrar la persona' });
    }
  };

  const obtenerPersonas = async (req, res) => {
    try {
      const personas = await persona.find();
      res.json(personas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las personas' });
    }
  };



  const actualizarPersona = async (req, res) => {
    const { id } = req.params;
    const { nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono } = req.body;
  
    try {
      const personaActualizado = await persona.findByIdAndUpdate(
        id,
        { nombres,apellidos,edad,genero,estadoCivil,descripcion,telefono },
        { new: true }
      );
      res.json(personaActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la persona' });
    }
  };
  
  
  const eliminarPersona = async (req, res) => {
    const { id } = req.params;
  
    try {
      await persona.findByIdAndRemove(id);
      res.json({ message: 'Persona eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la persona' });
    }
  };


  module.exports ={crearPersona, obtenerPersona , obtenerPersonas, eliminarPersona, actualizarPersona};

