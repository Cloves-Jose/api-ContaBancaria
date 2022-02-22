const { ClientesServices } = require('../services')
const clientesServices = new ClientesServices()

class ClientesControllers {

    static async criarCliente(req, res) {
        const  clientes = req.body
        console.log(clientes)
        try{
            const novoClienteCriado = await clientesServices.criarRegistro(clientes)
            return res.status(201).json(novoClienteCriado)
        }catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async listarClientes(req, res) {
        try {
            const listaClientes = await clientesServices.listarRegistros()
            return res.status(200).json(listaClientes)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async listaClientePorId(req, res) {
        try{
            const clienteId = req.params.id

            const encontraCliente = await clientesServices.listarRegistroPorId(clienteId)

            return res.status(201).json(encontraCliente)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async apagarClientes(req, res) {
        try {
            const clienteId = req.params.id

            await clientesServices.deletarRegistro(clienteId)
            return res.status(200).json(`O cliente de id ${clienteId} foi deletado`)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async recuperaClientes(req, res) {
        try{
            const clienteId = req.params.id

            const clienteRecuperado = await clientesServices.recuperarRegistro(clienteId)
            return res.status(200).json(clienteRecuperado)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = ClientesControllers