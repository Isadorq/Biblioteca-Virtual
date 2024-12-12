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
          <img src="/logoTransparent.png" alt="Logo">
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
    <main>
     <div class="container">
      <div class="link">
        <RouterLink to="./ListaLivro">Lista de Livros</RouterLink>
      </div>
      <div class="link">
        <Router-link to="./AddLivro">Adicionar Livros</Router-link>
      </div>
     </div> 
    </main>

</template>
  
  <script>
// import { RouterLink } from 'vue-router';

  // import BookForm from './AddLivro.vue';
  // import BookList from './ListaLivro.vue';
  // import axios from 'axios';
// import { RouterLink } from 'vue-router';

  // export default {
  //   components: {
  //     BookForm,
  //     BookList
  //   },
  //   data() {
  //     return {
  //       books: []
  //     };
  //   },
  //   created() {
  //     this.fetchBooks();
  //   },
  //   methods: {
  //     async fetchBooks() {
  //       try {
  //         const response = await axios.get('http://localhost:3000/books');
  //         this.books = response.data;
  //       } catch (error) {
  //         console.error('Erro ao buscar livros:', error);
  //       }
  //     }
  //   }
  // };
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

.container {
  background-color: white;
  border-radius: 5px;
  height: 150px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.link {
  color: #575A5E;
  text-decoration: none;
}
  </style>
  