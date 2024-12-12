const express = require('express');
const multer = require('multer');
const path = require('path');
const Book = require('../models/Books'); // Caminho correto para o modelo de livros
const router = express.Router();

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Definir o destino para salvar as imagens na pasta 'uploads'
        cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: (req, file, cb) => {
        // Renomear o arquivo para evitar conflitos, usando o timestamp
        cb(null, Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage });

// ** CRIAÇÃO (POST) ** 
router.post('/', u pload.single('image'), async (req, res) => {
    console.log(req.body); // Exibe os dados recebidos
    console.log(req.file); // Exibe os dados do arquivo enviado

    // Desestruturação dos dados enviados no corpo da requisição
    const { title, author, year, description } = req.body;
    
    // Verifica se todos os campos foram preenchidos
    if (!title || !author || !year || !description || !req.file) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos e envie uma imagem.' });
    }

    const imagePath = req.file.path; // Caminho da imagem enviada

    // Cria um novo livro com os dados recebidos
    const newBook = new Book({ title, author, year, description, image: imagePath });

    try {
        // Salva o novo livro no banco de dados
        await newBook.save();
        res.status(201).json(newBook); // Responde com o livro criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao salvar o livro', error });
    }
});

// ** LEITURA (GET) ** 
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Busca todos os livros
        res.status(200).json(books); // Retorna os livros encontrados
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error });
    }
});

// ** ATUALIZAÇÃO (PUT) ** 
router.put('/:id', async (req, res) => {
    const { title, author, year, description } = req.body;

    try {
        // Atualiza o livro com o ID fornecido
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year, description }, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.status(200).json(updatedBook); // Retorna o livro atualizado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});

// ** EXCLUSÃO (DELETE) **  
deleteBook(bookId) {
    const originalBooks = [...this.books];
    this.books = this.books.filter(book => book._id !== bookId);
  
    axios
      .delete(`http://localhost:3000/api/books/${bookId}`)
      .then(() => {
        console.log('Livro deletado com sucesso:', bookId);
      })
      .catch(error => {
        console.error('Erro ao deletar livro:', error.response || error.message);
        this.books = originalBooks; // Reverte se falhar
      });
}
  
module.exports = router;