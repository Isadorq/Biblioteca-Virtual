require('dotenv').config();     // Carrega variáveis de ambiente do arquivo .env

const express = require('express');     // Importa o express, um framework para criar APIs
const mongoose = require('mongoose');   // Importa o mongoose para conectar e interagir com o MongoDB
const cors = require('cors');
app.use(cors());

const app = express();  // Inicializa uma aplicação express
const authRotes = require('./routes/authRoutes')    // Importa as rotas de autenticação (ainda a serem criadas)

app.use(express.json());    // Middleware para processar as requisições JSON

// Configura as rotas de autenticação para o caminho /api/auth

// Conecta ao banco de dados MongoDB usando a string de conexão armazenada em variaveis de ambiente
mongoose.connect('mongodb+srv://isa:dora@users.wpvrz.mongodb.net/?retryWrites=true&w=majority&appName=library',
   { useNewUrlParser: true,  // Usa o novo parser da URL do MongoDB
    useUnifiedTopology: true,   // Usa o novo mecanismo de gerenciamento de conexões
})

.then(() => console.log('Conectado ao MongoDB'))    // Se conectar com sucesso, exibe mensagem no console
.catch((error) => console.log('Erro ao conecta ao MongoDB', error));    // Se falhar, exibe mensagem de erro

const PORT = process.env.PORT || 5000;      // Define a porta do servidor, usando variavel de ambiente ou padrão 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));   // Inicia o servidor e exibe mensagem no consoleconsole.log(process.env.JWT_SECRET);  // Verifique se a chave secreta está sendo carregada corretamente
console.log(process.env.JWT_SECRET);  // Verifique se a chave secreta está sendo carregada corretamente
