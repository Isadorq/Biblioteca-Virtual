import axios from 'axios';  // Importa Axios para requisições HTTP

// Cria instância do Axios com URL base da API
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',  // URL da API, inclui todas as rotas
  headers: {
    'Content-Type': 'application/json',  // Define o tipo de conteúdo como JSON
  },
});

// Funções para manipulação de livros
export default {
  getBooks() {
    return apiClient.get('/books');  // GET para listar livros
  },
  addBook(book) {
    return apiClient.post('/books', book);  // POST para adicionar livro
  },
  updateBook(id, book) {
    return apiClient.put(`/books/${id}`, book);  // PUT para atualizar livro pelo ID
  },
  deleteBook(id) {
    return apiClient.delete(`/books/${id}`);  // DELETE para excluir livro pelo ID
  },

  // Funções para autenticação (register e login)
  register(user) {
    return apiClient.post('/auth/register', user);  // Envia dados de cadastro
  },
  login(user) {
    return apiClient.post('/auth/login', user);  // Envia dados de login
  },
};
