var mongoose= require('mongoose');
Schema=mongoose.Schema;
var preferenciasSchema= new mongoose.Schema({
    hobbie:String,
    generoPreferido:String,
    edadMinima:Number,
    edadMaxima:Number,
    ciudades:String
});
var preferencias=mongoose.model('preferencias',preferenciasSchema);
module.exports=preferencias;