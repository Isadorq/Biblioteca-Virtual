const express = require('express');
const multer = require('multer');
const path = require('path');
const Book = require('../models/Books'); // Caminho correto para o modelo de livros
const router = express.Router();

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
  
  // Rota POST (criar livro)
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, author, year, description } = req.body;
        if (!title || !author || !year || !description || !req.file) {
            return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
        }

        const imagem = req.file.path; // Caminho da imagem

        const newBook = new Book({
            title,
            author,
            year,
            description,
            image: imagem // Agora a imagem será incluída corretamente
        });

        await newBook.save();
        res.status(201).json({ message: 'Livro cadastrado com sucesso', book: newBook });
    } catch (error) {
        console.error('Erro ao cadastrar livro:', error);
        res.status(500).json({ message: 'Erro ao cadastrar livro', error });
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
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.status(200).json({ message: 'Livro deletado com sucesso', deletedBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

module.exports = router;