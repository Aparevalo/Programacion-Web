var mongoose =require('mongoose');
Schema = mongoose.Schema;

var encuentroSchema = new mongoose.Schema({
    personaA:Object,
    personaB:Object,
    lugar:String,
    latitud:Number,
    longitud:Number,


});

var encuentros = mongoose.model('encuentros',encuentroSchema);
module.exports=encuentros;