const express = require('express');
const router =  express.Router();

const proveedorController = require('../controllers/proveedorController');

// estas son las rutas de nuestro CRUD para proveedor

router.post('/', proveedorController.agregarProveedor);
router.get('/', proveedorController.buscarProveedores);
router.get('/:id', proveedorController.buscarProveedorid);
router.delete('/:id', proveedorController.eliminarProveedorid);




module.exports = router;