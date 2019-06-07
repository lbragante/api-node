const express = require('express')
const routes = express.Router()

const CarroController = require ('./controllers/CarroController')

routes.get('/carros', CarroController.index)
routes.get('/carros/:id', CarroController.exibir)
routes.post('/carros', CarroController.inserir)
routes.put('/carros/:id', CarroController.atualizar)
routes.delete('/carros/:id', CarroController.deletar)

module.exports = routes