var cliente = require('../model/cliente');

const crearCliente = async (req, res) => {
  
    const {nombres,apellidos,cedula,edad,telefono} = req.body;
  
    try {
      const nuevacliente = await cliente.create({ nombres,apellidos,cedula,edad,telefono});
      res.json(nuevacliente);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la cliente' });
    }
  };
  
  
  
  const obtenerClientes = async (req, res) => {
    try {
      const clientes = await cliente.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las clientes' });
    }
  };



  const actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombres,apellidos,cedula,edad,telefono } = req.body;
  
    try {
      const clienteActualizado = await cliente.findByIdAndUpdate(
        id,
        { nombres,apellidos,cedula,edad,telefono },
        { new: true }
      );
      res.json(clienteActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la cliente' });
    }
  };
  
  const actualizarClienteNombre = async (req, res) => {
    const { nombre } = req.params;
    const { apellidos, cedula, edad, telefono } = req.body;
  
    try {
      const clienteActualizado = await cliente.findOneAndUpdate(
        { nombres: nombre },
        { apellidos, cedula, edad, telefono },
        { new: true }
      );
      res.json(clienteActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
  };

  
  const eliminarCliente = async (req, res) => {
    const { id } = req.params;
  
    try {
      await cliente.findByIdAndRemove(id);
      res.json({ message: 'cliente eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la cliente' });
    }
  };


  module.exports ={crearCliente, obtenerCliente , obtenerClientes, eliminarCliente, actualizarCliente,actualizarClienteNombre};

