var mongoose =require('mongoose');
Schema = mongoose.Schema;

var vehiculoSchema = new mongoose.Schema({
    modelo:String,
    marca:String,
    placa:String,
    serial:Number    
});

var vehiculo = mongoose.model('vehiculo',vehiculoSchema);

module.exports=vehiculo;