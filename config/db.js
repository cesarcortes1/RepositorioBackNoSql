const mongoose = require('mongoose');
require('dotenv').config();

//aca vamos a crear la conexion con mongoDB

const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con la BD proyecto de mongo'))
    .catch((err) => console.error(err));

}

module.exports = conectarBD;