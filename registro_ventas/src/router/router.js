const express = require('express');
const router = express.Router();
const {crearProducto, obtenerProductos, eliminarProducto, actualizarProducto,actualizarProductoNombre} = require('../controller/productoController');
const {crearCliente,  obtenerClientes, eliminarCliente, actualizarCliente,actualizarClienteNombre} = require('../controller/clienteController');
const {crearVenta,obtenerVentas,eliminarVenta,actualizarVenta} = require('../controller/ventaController');

//Rutas Clientes
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);
router.put('/clientes/:id', actualizarCliente);
router.put('/clientesNombre/:nombre', actualizarClienteNombre);
router.delete('/clientes/:id', eliminarCliente);

//Rutas Productos
router.get('/productos', obtenerProductos);
router.post('/productos', crearProducto);
router.put('/productos/:id', actualizarProducto);
router.put('/productosNombre/:nombre', actualizarProductoNombre);
router.delete('/productos/:id', eliminarProducto);

//Rutas Venta
router.get('/ventas', obtenerVentas);
router.post('/ventas', crearVenta);
router.put('/ventas/:id', actualizarVenta);
router.delete('/ventas/:id', eliminarVenta);


module.exports = router;