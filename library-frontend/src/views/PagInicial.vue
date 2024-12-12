<template>
  <div>
    <nav>
      <div class="navbar">
        <ul class="icon" style="list-style-type: none;">
          <li>
            <!-- Ícone de menu removido ou pode ser adicionado aqui -->
          </li>
        </ul>
        
        <!-- Logo -->
        <div class="logo">
          <router-link to="/PagInicial">
            <img src="/logoTransparent.png" alt="Logo" />
          </router-link>
        </div>

        <!-- Links adicionais ao lado da logo -->
        <div class="nav-links">
          <router-link to="/MaisLivros" class="nav-link">Mais Livros</router-link>
          <router-link to="/ListaLogin" class="nav-link">Lista Login</router-link>
        </div>

        <!-- Barra de pesquisa -->
        <div class="search">
          <input
            type="text"
            placeholder="Pesquise o livro ou ID"
            v-model="searchQuery"
            @input="filterBooks"
          />
        </div>

        <ul class="right-icons" style="list-style-type: none;">
          <li>
            <a href="#user">
              <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <div class="banner">
        <img src="/banner 1.png" alt="Banner">
      </div>

      <div class="container">
        <div class="livro" v-for="(book, index) in filteredBooks" :key="index">
          <router-link v-if="book._id" :to="'/livro/' + book._id">
            <img :src="book.image" alt="Book" v-if="book.image">
            <h3>{{ book.title }}</h3>
            <p>Autor: {{ book.author }}</p>
            <p>Ano: {{ book.year }}</p>
          </router-link>
          <p v-else>Este livro não tem ID válido.</p>
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      searchQuery: '',
      filteredBooks: []
    };
  },
  async mounted() {
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        this.books = response.data;
        this.filteredBooks = this.books;
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
    filterBooks() {
      const query = this.searchQuery.toLowerCase();
      this.filteredBooks = this.books.filter(book => {
        return (
          book.title.toLowerCase().includes(query) ||
          book._id.includes(query)
        );
      });
    }
  }
};
</script>

<style scoped>
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
}

.logo {
  display: flex;
  justify-content: flex-start;
  margin-left: 60px;
}

.logo img {
  width: 80px;
  height: 80px;
  display: block;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.nav-link:hover {
  text-decoration: underline;
}

.search {
  display: flex;
  justify-content: center;
  height: 35px;
  margin-left: 20px;
  border-radius: 5px;
  flex: 1;
}

.search input {
  width: 134px;
  height: 15px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.right-icons {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.right-icons li {
  margin-left: 20px;
  position: relative;
}

.right-icons a {
  color: #ffffff;
  text-decoration: none;
}

.right-icons i {
  font-size: 24px;
}

.banner img {
  width: 815px;
  height: 350px;
  border-radius: 5px;
}

.banner {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  border-radius: 5px;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  flex-wrap: wrap;
}

.livro {
  background-color: #575A5E;
  width: 211px;
  height: 342px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 10px;
}

.livro img {
  height: 200px;
  margin-top: 10px;
}

.livro h3, .livro p {
  color: white;
}

.livro a {
  color: inherit;
  text-decoration: none;
}
</style>
