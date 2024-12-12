<template>
  <div>
    <nav>
      <div class="navbar">
        <!-- Navbar Content -->
      </div>
    </nav>

    <main>
      <div class="banner">
        <img src="/banner 1.png" alt="Banner">
      </div>

      <div class="container">
        <div class="livro" v-for="(book, index) in books" :key="index">
          <img :src="book.image" alt="Book" v-if="book.image"> <!-- Verifica se a imagem existe -->
          <h3>{{ book.title }}</h3>
          <p>Autor: {{ book.author }}</p>
          <p>Ano: {{ book.year }}</p>
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
      books: [] // Array para armazenar os livros
    };
  },
  async mounted() {
    await this.fetchBooks(); // Chama a função para buscar os livros ao montar o componente
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/books'); // URL da sua API
        this.books = response.data; // Armazena os livros no estado do componente
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
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
  padding: 30px;
}

.icon {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center; 
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
  list-style-type: none;
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
  width: 100%; 
}

.livro {
  background-color: #575A5E;
  width: 211px;
  height: 342px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.livro img {
  height: 200px;
  margin-top: 10px;
}

.star {
  display: flex;    
  justify-content: center;
}

/* .sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 155px;
  height: 100%;
  background-color: #575A5E;
  color: white;
  overflow-y: auto;
  transition: left 0.3s ease, opacity 0.3s ease;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* gap: 20px; */
  /* z-index: 1000; */
/* } */

/* .sidebar.open {
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
} */

.iconE {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 18px;
  width: 45px;
  height: 45px;
  margin-left: 16px;
}

.iconE i {
  font-size: 24px;
  color: white;
}

.iconE .letter {
  color: white;
}

.list {
  display: flex;
  flex-direction: row;

}

.link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.container {
  background-color: black;
}

</style>
