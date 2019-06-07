const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/api-carros', { useNewUrlParser: true })

requireDir('./src/models')

// Rotas
app.use('/', require('./src/routes'))

const porta = 3001;
app.listen(porta)
console.log(`Rodando na porta ${ porta }`)