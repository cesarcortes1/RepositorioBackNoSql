const mongoose = require('mongoose');

//El modelo que se cree aca debe ser igual a el de la Bd. Aca se definenen los atributos los titulos y tipo de dato

const clienteSchema = mongoose.Schema({

    nombres : {
        type: String, 
        required : true
    },
    apellidos : {
        type: String, 
        required : true
    },
    documento : {
        type: Number, 
        required : true
    },
    correo : {
        type: String, 
        required : true
    },
    telefono : {
        type: Number, 
        required : true
    },
    direccion : {
        type: String, 
        required : true
    },

},{versionkey:false});

module.exports = mongoose.model('Cliente', clienteSchema );