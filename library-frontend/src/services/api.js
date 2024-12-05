import axios from 'axios';  // Importa Axios para requisições HTTP

// Cria instância do Axios com URL base da API
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books',  // URL correta da API
    headers: {
        'Content-Type': 'application/json', // Define JSON como tipo de conteúdo
    },
});

// Função para obter o token JWT do localStorage
const getToken = () => localStorage.getItem('token');

// Adiciona o token JWT nas requisições
apiClient.interceptors.request.use(
    config => {
        const token = getToken();  // Obtém o token do localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  // Adiciona o token ao cabeçalho
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Exporta funções CRUD usando Axios
export default {
    getBooks() {
        return apiClient.get('/');  // GET para listar livros
    },
    addBook(book) {
        return apiClient.post('/', book);  // POST para adicionar um livro
    },
    updateBook(id, book) {
        return apiClient.put(`/${id}`, book);  // PUT para atualizar livro pelo ID
    },
    deleteBook(id) {
        return apiClient.delete(`/${id}`);  // DELETE para excluir livro pelo ID
    },
};