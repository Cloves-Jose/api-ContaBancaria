const Services = require('./Services')
const database = require('../models')

class ContasServices extends Services {
    constructor(){
        super('Contas')
        this.clientes = new Services('Clientes')
    }


    async realizaDeposito(id, valorAtualizado) {
        const conta = database[this.nomeDoModelo].findOne({ where: {id: id}})

        if(conta) {
            const resultado = await database[this.nomeDoModelo].increment('saldo', {by: valorAtualizado, where: {
                id: id
            }})   
            return resultado
        }
    }

    async realizaSaque(id, valorAtualizado) {
        const conta = database[this.nomeDoModelo].findOne({where: {id: id}})

        if(conta) {
            const resultado = await database[this.nomeDoModelo].decrement('saldo', {by: valorAtualizado, where: { 
                id: id
            }})
            return resultado
        }

    }

    
}

module.exports = ContasServices
