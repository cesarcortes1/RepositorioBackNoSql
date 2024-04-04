const express = require('express');
const router =  express.Router();
const clienteController = require('../controllers/clienteController');

// estas son las rutas de nuestro CRUD para cliente

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarClienteid);
router.delete('/:id', clienteController.eliminarClienteid);
router.put('/:id', clienteController.actualizarClienteid);



module.exports = router;