var mongoose =require('mongoose');
Schema = mongoose.Schema;

var personasSchema = new mongoose.Schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    genero:String,
    estadoCivil:String,
    descripcion:String,
    telefono:String

});

var persona = mongoose.model('personas',personasSchema);
module.exports=persona;