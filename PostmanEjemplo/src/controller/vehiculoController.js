var vehiculo = require('../model/vehiculo');

//post
const crearVehiculo = async (req, res) => {

    const {modelo, marca,placa,serial} = req.body;
  
    try {
      const nuevoVehiculo = await vehiculo.create({ modelo, marca,placa,serial});
      res.json(nuevoVehiculo);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el vehiculo' });
    }
  };
  


  const obtenerVehiculos = async (req, res) => {
    try {
      const vehiculos = await vehiculo.find();
      res.json(vehiculos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los vehiculos' });
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

  


  module.exports ={crearVehiculo,obtenerVehiculos};

