var producto = require('../model/producto');

const crearProducto = async (req, res) => {
    
    const {nombre,marca,proovedor,precio,descripcion} = req.body;
  
    try {
      const nuevaproducto = await producto.create({ nombre,marca,proovedor,precio,descripcion});
      res.json(nuevaproducto);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la producto' });
    }
  };
  
  

  const obtenerProductos = async (req, res) => {
    try {
      const productos = await producto.find();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las productos' });
    }
  };



  const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre,marca,proovedor,precio,descripcion} = req.body;
  
    try {
      const productoActualizado = await producto.findByIdAndUpdate(
        id,
        { nombre,marca,proovedor,precio,descripcion},
        { new: true }
      );
      res.json(productoActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la producto' });
    }
  };

  const actualizarProductoNombre = async (req, res) => {
    const { nombre } = req.params;
    const { marca, proovedor, precio, descripcion } = req.body;
  
    try {
      const productoActualizado = await producto.findOneAndUpdate(
        { nombre: nombre },
        { marca, proovedor, precio, descripcion },
        { new: true }
      );
      res.json(productoActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el producto' });
    }
  };
  
  
  
  const eliminarProducto = async (req, res) => {
    const { id } = req.params;
  
    try {
      await producto.findByIdAndRemove(id);
      res.json({ message: 'producto eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la producto' });
    }
  };


  module.exports ={crearProducto, obtenerProducto , obtenerProductos, eliminarProducto, actualizarProducto,actualizarProductoNombre};

