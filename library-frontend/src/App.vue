<template>
  <div class="form-container">
    <h2>Adicionar Livro</h2>
    <form @submit.prevent="submitBook">
      <div class="form-group">
        <label for="title">Título</label>
        <input v-model="book.title" type="text" id="title" placeholder="Título do Livro" required />
      </div>
      <div class="form-group">
        <label for="author">Autor</label>
        <input v-model="book.author" type="text" id="author" placeholder="Autor do Livro" required />
      </div>
      <div class="form-group">
        <label for="year">Ano de Publicação</label>
        <input v-model="book.year" type="number" id="year" placeholder="Ano de Publicação" required />
      </div>
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
        year: null,
      },
    };
  },
  methods: {
    async submitBook() {
      try {
        const response = await axios.post('http://localhost:5000/api/books', this.book);
        console.log('Livro adicionado:', response.data);
        alert('Livro adicionado com sucesso!');
        this.resetForm();
      } catch (error) {
        console.error('Erro ao adicionar livro:', error);
        alert('Erro ao adicionar livro.');
      }
    },
    resetForm() {
      this.book = {
        title: '',
        author: '',
        year: null,
      };
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
