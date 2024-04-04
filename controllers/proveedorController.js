const Proveedor = require('../models/Proveedor');

// Funcion para agregar proveedores

exports.agregarProveedor = async(req , res) => {
    try {

        let proveedor;
        proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.send(proveedor);
        
    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al agregar un proveedor');
    }
}

//Funcion para buscar todos los proveedores
exports.buscarProveedores =  async (req,res) =>{
    try {

        const proveedor = await Proveedor.find();
        res.json(proveedor);
        
    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al buscar los proveedores');        
    }
}

// Funcion para buscar un proveedor por ID

exports.buscarProveedorid= async(req,res) => {
    try {

        let proveedorid = await Proveedor.findById(req.params.id);
        if(!proveedorid){
            res.status(404).send({msg:'Proveedor no encontrado con ese ID'});
            return;
        }
        res.json(proveedorid);
        
    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al buscar un id especifico de proveedor');
    }
}

// funcion para eliminar un proveedor por Id

exports.eliminarProveedorid = async(req , res) => {
    try {
        let proveedordelete = await Proveedor.findById(req.params.id);
        if(!proveedordelete){
            res.status(404).json({msg:'El proveedor no existe para poder ser eliminado'});
            return;
        }
        await Proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg:'El proveedor a sido eliminado con exito'});
        
    } catch (error) {
        console.log(error)
        req.status (500).send('Hubo un error al eliminar un proveedor');
    }
}