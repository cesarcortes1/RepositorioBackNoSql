const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({

    nombreP : {
        type : String,
        required : true
    },
    nitP : {
        type : Number,
        required : true
    },
    direccionP : {
        type : String,
        required : true
    },
    telefonoP : {
        type : Number,
        required : true
    },
    productoP : {
        type : String,
        required : true
    },

},{versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);
