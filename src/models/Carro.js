const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const CarroSchema = new mongoose.Schema({

    marca: {
        type: String,
        required: true
    },

    modelo: {
        type: String,
        required: true
    },

    ano: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

CarroSchema.plugin(mongoosePaginate)
mongoose.model('Carro', CarroSchema)