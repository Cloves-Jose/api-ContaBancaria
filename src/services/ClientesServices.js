const Services = require('./Services')
const database = require('../models')

class ClientesServices extends Services {
    constructor() {
        super('Clientes')
    }
}

module.exports = ClientesServices