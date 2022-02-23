const bodyParser = require('body-parser')

const clientes = require('./clientesRoute')
const contas = require('./contasRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        clientes,
        contas
    )
}