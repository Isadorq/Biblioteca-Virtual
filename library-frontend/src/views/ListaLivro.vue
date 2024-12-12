<template>
  <nav>
      <div class="navbar">
        <ul class="icon">
          <!-- <li>
            <a href="#" id="menu-toggle" @click="toggleSidebar">
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </a>
          </li> -->
        </ul>
        <div class="logo">
          <RouterLink to="PagInicial">
            <img src="/logoTransparent.png" alt="Logo">
          </RouterLink>
        </div>
        <div class="search">
          <input type="text" placeholder="Search ur book ☠️">
        </div>
        <ul class="right-icons">
          <li>
            <router-link to="PagUser">
              <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
            </router-link>
          </li>
          <li>
            <a href="#notifications">
              <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  <div class="book-list-container">
    <h2>Livros Adicionados</h2>
    <ul>
      <li v-for="book in books" :key="book._id">
        <span>{{ book.title }} - {{ book.author }} ({{ book.year }})</span>
        <button @click="deleteBook(book._id)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: []
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    // Função para pegar os livros da API
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        this.books = response.data;
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
    // Função para deletar um livro
    async deleteBook(bookId) {
      try {
        await axios.delete(`http://localhost:5000/books/${bookId}`);
        this.books = this.books.filter(book => book._id !== bookId); // Remove o livro da lista local
      } catch (error) {
        console.error('Erro ao deletar livro:', error);
      }
    }
  }
};
</script>

<style scoped>

body {
  background-color: #727374;
  font-family: 'Texturina', serif;
}

.navbar {
  background-color: #575A5E;
  border-radius: 5px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 30px;
}

.icon {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
}

.logo img {
  width: 80px;
  height: 80px;
}

.search input {
  width: 134px;
  height: 15px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.right-icons {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.right-icons li {
  margin-left: 20px;
}

.book-list-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
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
