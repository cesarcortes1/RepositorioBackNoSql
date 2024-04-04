const express = require('express');
const conectarBD = require('../config/db');
const cors = require ('cors');

// creamos nuestreo servidor
const app= express();

//Enlazamos la conexion con nuestra BD. llamamos la variable de la configuracion db

conectarBD();
app.use(cors());

app.use(express.json());

//Ruta principal del proyecto

app.use('/api/clientes' , require ('../routes/rutas'));
app.use('/api/proveedor' , require ('../routes/rutasproveedor'));



// Ruta para verificar el servidor

app.get('/', (req,res) => {
    res.send('Hola mundo desarrollador web');
})

//se define una constante para el puerto que tendra configuracion en la nube del puerto, cuando se trabaja en  produccion

const port = process.env.PORT || 3000;
app.listen(port ,() =>{
    console.log('El servidor esta corriendo OK http://localhost:3000/');
})


