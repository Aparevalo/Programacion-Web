var mongoose =require('mongoose');
Schema = mongoose.Schema;

var ventaSchema = new mongoose.Schema({
    cliente:Object,
    productos: [{ type: Object }],
    cantidad:[Number],
    monto: [Number],
    descripcion:String,
    fecha:Date,


});

var venta = mongoose.model('venta',ventaSchema);
module.exports=venta;
