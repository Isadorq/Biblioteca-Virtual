<template>
  <NavBar></NavBar>

  <div class="form-container">
    <h2>Adicionar Livro</h2>
    <form @submit.prevent="addBook">
      <label for="title">Título:</label>
      <input type="text" id="title" v-model="book.title" required />

      <label for="author">Autor:</label>
      <input type="text" id="author" v-model="book.author" required />

      <label for="year">Ano de Lançamento:</label>
      <input type="number" id="year" v-model.number="book.year" required />

      <label for="description">Descrição:</label>
      <input type="text" id="description" v-model="book.description" required />

      <label for="image">Imagem:</label>
      <input type="file" id="image" @change="handleImageChange" accept="image/*" required />

      <!-- Opção de Status -->
      <label for="status">Status:</label>
      <select id="status" v-model="book.status" required>
        <option value="available">Disponível</option>
        <option value="unavailable">Indisponível</option>
      </select>

      <button type="submit">Adicionar Livro</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      // isSidebarOpen: false,
      // isPopupVisible: false,
      formData: {
        name: '',
        email: '',
        permission: '',
        contact: '',
        photo: null,
      },
      formFields: [
        { name: 'name', label: 'Nome', type: 'text' },
        { name: 'email', label: 'E-mail', type: 'email' },
        { name: 'password', label: 'Senha', type: 'password' },
      ],
      users: [], 
      searchTerm: '', 
    };
  },
  methods: {
    methods: {
  // Método para adicionar o livro
  async addBook() {
    const formData = new FormData();
    formData.append('title', this.book.title);
    formData.append('author', this.book.author);
    formData.append('year', this.book.year);
    formData.append('description', this.book.description);

    // Verifica se a imagem foi selecionada
    if (this.book.image) {
      formData.append('image', this.book.image);
    } else {
      console.error('Nenhuma imagem selecionada.');
      return; // Retorna se não houver imagem
    }

    // Adiciona o status do livro ao formData
    formData.append('status', this.book.status);

    // Log dos dados que estão sendo enviados
    console.log('Dados enviados:', {
      title: this.book.title,
      author: this.book.author,
      year: this.book.year,
      description: this.book.description,
      image: this.book.image ? this.book.image.name : 'Nenhuma imagem',
      status: this.book.status
    });

    try {
      const response = await axios.post('http://localhost:3000/api/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Livro adicionado:', response.data);

      // Limpa o formulário após o envio
      this.book = { title: '', author: '', year: null, description: '', image: null, status: 'available' };

      this.$emit('book-added', response.data);

    } catch (error) {
      console.error('Erro ao adicionar livro:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data) {
        console.error('Mensagem de erro do servidor:', error.response.data.message);
      }
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


.logo img {
  width: 80px;
  text-decoration: none;
}

img:hover {
  text-decoration: underline;
}

.search input {
  width: 134px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.right-icons button {
  background: none;
  border: none;
  cursor: pointer;
}

/* .sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #575a5e;
  color: white;
  transition: left 0.3s ease-in-out;
} */
/* 
.sidebar.open {
  left: 0;
} */

.popup {
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #575a5e;
  color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
}

.mainContainer {
  width: 100%; /* Garante que o container ocupe a largura disponível */
  max-width: 600px; /* Define um limite máximo para a largura do conteúdo */
  padding: 20px;
  box-sizing: border-box;
}

.description {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; /* Alinha os elementos na vertical */
  justify-content: flex-start; /* Alinha os elementos no topo */
}

.description h1 {
  margin-bottom: 20px; /* Espaçamento entre o título e o formulário */
}

.inputs .campo {
  margin-bottom: 15px; /* Espaçamento entre os campos de input */
}

button {
  margin-top: 20px;
  background-color: #575a5e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
</style>
