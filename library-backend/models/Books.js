const mongoose = require('mongoose')

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    description: { type: String, required: true},
    image: { type: String, required: true }
})

// Exportando o modelo
module.exports = mongoose.model('Book', BookSchema)