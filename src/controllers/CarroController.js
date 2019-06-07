const mongoose = require('mongoose')
const Carro = mongoose.model('Carro')

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query
        const carros = await Carro.paginate({}, { page: page, limit: 10})
        return res.json(carros)
    },

    async exibir(req, res) {
        const carro = await Carro.findById(req.params.id)
        return res.json(carro)
    },

    async inserir(req, res) {
        const carro = await Carro.create(req.body)
        return res.json(carro)
    },

    async atualizar(req, res) {
        const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(carro)
    },

    async deletar(req, res) {
        await Carro.findByIdAndRemove(req.params.id)
        return res.send()
    }

}