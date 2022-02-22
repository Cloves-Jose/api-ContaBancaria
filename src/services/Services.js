const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async criarRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async listarRegistros(where = {}) {
        return database[this.nomeDoModelo].findAll({where: {...where}})
    }

    async listarRegistroPorId(id) {
        return database[this.nomeDoModelo].findOne({where: { id: id}})
    }

    async deletarRegistro(id) {
        return database[this.nomeDoModelo].destroy({where: {id: id}})
    }

    async recuperarRegistro(id) {
        return database[this.nomeDoModelo].restore({where: {id: id}})
    }
}

module.exports = Services