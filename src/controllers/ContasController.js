const { ContasServices } = require('../services')
const contasServices = new ContasServices

class ContasController {

    static async criarConta(req, res) {
        try{
            const criarConta = req.body
            const contaCriada = await contasServices.criarRegistro(criarConta)
            return res.status(201).json(contaCriada)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async listarTodasAsContas(req, res) {
        try{
            const contasListadas = await contasServices.listarRegistros()
            return res.status(200).json(contasListadas)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async realizarDeposito(req, res) {
        try {
            const idConta = req.params.idConta
            const valor = req.body.saldo

            const objDeposito = Object.assign({}, {idConta, valor})
            console.log(objDeposito)
            
            await contasServices.realizaDeposito(idConta, valor)
            res.status(201).json(`Deposito realizado com sucesso!`)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async realizaSaque(req, res) {
        try{
            const idConta = req.params.idConta
            const valor = req.body.saldo

            await contasServices.realizaSaque(idConta, valor)
            res.status(201).json(`Saque realizado com sucesso!`)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async verificaSaldo(req, res) {
        try{
            const idConta = req.params.idConta
            const resultado = await contasServices.verificaSaldo(idConta)
            console.log(resultado)
            res.status(200).json(resultado)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = ContasController