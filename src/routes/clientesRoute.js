const { Router } = require('express')
const ClientesControllers = require('../controllers/ClientesController')

const router = Router()

router
    .post('/clientes', ClientesControllers.criarCliente)
    .get('/clientes', ClientesControllers.listarClientes)
    .get('/clientes/:id', ClientesControllers.listaClientePorId)
    .delete('/clientes/:id', ClientesControllers.apagarClientes)
    .post('/clientes/recuperar/:id', ClientesControllers.recuperaClientes)

module.exports = router