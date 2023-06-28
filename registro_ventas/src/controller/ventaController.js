var Cliente = require('../model/cliente');
var Producto = require('../model/producto');
var Venta = require('../model/venta');

const crearVenta = async (req, res) => {
  const { cliente, productos, cantidades, descripcion, fecha } = req.body;

  try {
    const clienteId = await Cliente.findById(cliente);
    const productosData = await Promise.all(productos.map((producto) => Producto.findById(producto)));

    if (!clienteId || productosData.includes(null)) {
      return res.status(404).json({ error: 'No se encontró el cliente o algún producto' });
    }

    const montos = productosData.map((producto, index) => producto.precio * cantidades[index]);

    const cventa = {cliente: clienteId,productos: productosData,cantidad: cantidades,monto: montos,descripcion,fecha};

    const nuevoventa = await Venta.create(cventa);

    res.json(nuevoventa);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la venta' });
  }
};

const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
};

const actualizarVenta = async (req, res) => {
  const { id } = req.params;
  const { cliente,productos,cantidad,montodescripcion,fecha } = req.body;

  try {
    const ventaActualizado = await Venta.findByIdAndUpdate(
      id,
      { cliente,productos,cantidad,montodescripcion,fecha },
      { new: true }
    );
    res.json(ventaActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la venta' });
  }
};


const eliminarVenta = async (req, res) => {
  const { id } = req.params;

  try {
    await venta.findByIdAndRemove(id);
    res.json({ message: 'venta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
};
  

  module.exports ={crearVenta,obtenerVentas,eliminarVenta,actualizarVenta};

