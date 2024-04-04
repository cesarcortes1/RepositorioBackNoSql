const Cliente = require('../models/Cliente');

//Funcion para buscar clientes

exports.buscarClientes = async(req,res) =>{

    try {

        const cliente = await Cliente.find();
        res.json(cliente);
        
    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al buscar los clientes');
        
    }
}

//Funcion para buscar cliente por id

exports.buscarClienteid = async(req,res) =>{
    
    try {        
       
        let clienteid = await Cliente.findById(req.params.id);        
        if(!clienteid){
            res.status(404).send({msg:'Usuario no enocntrado con ese ID'});
            return;
        }
        res.json(clienteid);
        
        
    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al buscar un id especifico de cliente');
        
    }
}

// creamos una funcion de agregar clientes, en el controlador se crean las funciones

exports.agregarClientes = async(req ,res) => {
    try {

        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);     


    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al agregar un cliente');
    }

}

// Cremoas la de eliminar cliente debe ser por el id

exports.eliminarClienteid = async(req ,res) => {
    try {
        let clientedelete= await Cliente.findById(req.params.id);
        if(!clientedelete){
            res.status(404).json({msg: 'El cliente no existe para poder ser eliminado'});
            return;
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:'El cliente a sido eliminado con exito'});
        return;

    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al eliminar un cliente');
    }
}

// Esta funcion es para actualizar cliente

exports.actualizarClienteid = async(req,res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let clienteact = await Cliente.findById(req.params.id);
        if(!clienteact){
            res.status(404).json({msg:'El cliente no existe para ser actualizado'});
        }else{
            clienteact.nombres = nombres;
            clienteact.apellidos = apellidos;
            clienteact.documento = documento;
            clienteact.correo = correo;
            clienteact.telefono = telefono;
            clienteact.direccion = direccion;

            clienteact = await Cliente.findOneAndUpdate({_id: req.params.id}, clienteact,{new: true});
            res.json(clienteact);
        }
        

    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al agregar un cliente');
    }


}

