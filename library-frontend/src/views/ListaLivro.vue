<template>
  <NavBar></NavBar>
  <div class="book-list-container">
    <h2>Livros Adicionados</h2>
    <ul v-if="books.length">
      <li v-for="book in books" :key="book._id">
        <span>{{ book.title }} - {{ book.author }} ({{ book.year }})</span>
        <button @click="deleteBook(book._id)">Deletar</button>
      </li>
    </ul>
    <p v-else>Nenhum livro adicionado ainda.</p>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      books: [], // Inicializa a lista de livros como vazia
    };
  },
  created() {
    this.fetchBooks(); // Carrega os livros quando o componente é criado
  },
  methods: {
    // Função para buscar livros da API
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        this.books = response.data; // Armazena os livros recebidos na lista
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
    // Função para deletar um livro
    async deleteBook(bookId) {
      try {
        await axios.delete(`http://localhost:3000/api/books/${bookId}`); // URL corrigida
        this.books = this.books.filter(book => book._id !== bookId); // Atualiza a lista removendo o livro deletado
      } catch (error) {
        console.error('Erro ao deletar livro:', error);
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #727374;
  font-family: 'Texturina', serif;
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #575a5e;
  border-radius: 5px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
}

.book-list-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 50px auto; /* Margem maior para centralizar verticalmente */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%; /* Garante que a lista ocupa toda a largura do container */
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  width: 100%; /* Faz os itens da lista ocuparem toda a largura */
}

button {
  background-color: #ff6347;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
}

button:hover {
  background-color: #e5533d;
}
</style>