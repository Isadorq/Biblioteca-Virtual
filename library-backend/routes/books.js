const express = require('express');
const multer = require('multer');
const Book = require('../models/Books');
const router = express.Router();

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pasta onde os arquivos serão armazenados
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Renomeia o arquivo para evitar conflitos
    }
});

const upload = multer({ storage });

// ** CRIAÇÃO (POST) ** 
router.post('/', upload.single('image'), async (req, res) => { 
    try { 
        const { title, author, year, descrition } = req.body; 
        if (!title || !author || !year || !descrition || !req.file) {
            return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
        }

        const imagePath = req.file.path; // Caminho da imagem enviada
        
        const newBook = new Book({ title, author, year, descrition, image: imagePath }); // Criando uma nova instância do modelo 
        await newBook.save(); 

        res.status(201).json(newBook); 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao criar livro', error }); 
    } 
}); 

// ** LEITURA (GET) ** 
router.get('/', async (req, res) => { 
    try { 
        const books = await Book.find(); 
        res.status(200).json(books); 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao buscar livros', error }); 
    } 
}); 

// ** ATUALIZAÇÃO (PUT) ** 
router.put('/:id', async (req, res) => { 
    const { title, author, year, descrition } = req.body; 
    try { 
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year, descrition }, { new: true }); 
        if (!updatedBook) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.status(200).json(updatedBook); 
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
        res.status(200).json({ message: 'Livro deletado com sucesso' }); 
    } catch (error) { 
        res.status(500).json({ message: 'Erro ao deletar livro', error }); 
    } 
});

module.exports = router;
