const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const authRoutes = require('./routes/authRoutes')    // Importa as rotas de autenticação 
require('dotenv').config();     // Carrega variáveis de ambiente do arquivo .env

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Importação das rotas
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

// app.use(express.static(path.join(__dirname, 'public')));

// Definir a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});