<template>
  <nav>
    <div class="navbar">
      <ul class="icon">
        <!-- Menu e ícones -->
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

  <div class="form-container">
    <h2>Adicionar Livro</h2>
    <form @submit.prevent="addBook">
      <label for="title">Título:</label>
      <input type="text" id="title" v-model="book.title" required />

      <label for="author">Autor:</label>
      <input type="text" id="author" v-model="book.author" required />

      <label for="year">Ano de Lançamento:</label>
      <input type="number" id="year" v-model="book.year" required />

      <!-- Campo para upload da imagem -->
      <label for="image">Imagem:</label>
      <input type="file" id="image" @change="onFileChange" accept="image/*" required />

      <button type="submit">Adicionar Livro</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: {
        title: '',
        author: '',
        year: '',
        image: null // Para armazenar a imagem selecionada
      }
    };
  },
  methods: {
    onFileChange(event) {
      this.book.image = event.target.files[0]; // Armazena o arquivo selecionado
    },
    async addBook() {
      const formData = new FormData(); // Cria um objeto FormData
      formData.append('title', this.book.title);
      formData.append('author', this.book.author);
      formData.append('year', this.book.year);
      formData.append('image', this.book.image); // Adiciona a imagem ao FormData

      try {
        const response = await axios.post('http://localhost:3000/api/books', formData, {
          headers: {
            'Content-Type': 'multipart/form-data' // Define o tipo de conteúdo como multipart/form-data
          }
        });

        console.log('Livro adicionado:', response.data);

        // Limpa o formulário após o envio
        this.book = { title: '', author: '', year: '', image: null };

        this.$emit('book-added', response.data); // Emite o evento para atualizar a lista de livros

      } catch (error) {
        console.error('Erro ao adicionar livro:', error);
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
  .form-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  