const { Router } = require('express')
const ContasController = require('../controllers/ContasController')
const ClientesController = require('../controllers/ClientesController')

const router = Router()

router
    .post('/clientes/:id/contas', ContasController.criarConta)
    .post('/contas/:idConta/deposito', ContasController.realizarDeposito)
    .post('/contas/:idConta/saque', ContasController.realizaSaque)
    .get('/contas/:idCliente/saldo', ContasController.verificaSaldo)
    .get('/contas/listar', ContasController.listarTodasAsContas)

module.exports = router