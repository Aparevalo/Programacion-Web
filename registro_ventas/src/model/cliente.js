var mongoose =require('mongoose');
Schema = mongoose.Schema;

var clienteSchema = new mongoose.Schema({
    nombres:String,
    apellidos:String,
    cedula:String,
    edad:Number,
    telefono:String

});

var cliente = mongoose.model('cliente',clienteSchema);
module.exports=cliente;