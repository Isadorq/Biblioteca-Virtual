<template>
  <div>
    <!-- Verifique se o livro foi carregado antes de acessar suas propriedades -->
    <h1 v-if="book">{{ book.title }}</h1>
    <div v-if="book">
      <p>{{ book.description }}</p>
      <!-- Exibir outras informações do livro aqui -->
    </div>
    <div v-else>
      <p>Carregando...</p> <!-- Mostra uma mensagem de carregamento enquanto os dados estão sendo buscados -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: null, // Dados do livro
    };
  },
  async created() {
    const bookId = this.$route.params.id; // Pega o ID da URL
    await this.fetchBook(bookId); // Chama a função para buscar os dados do livro
  },
  methods: {
  async fetchBook(id) {
    try {
      const response = await axios.get(`http://localhost:3000/api/books/${id}`);
      console.log('Livro carregado:', response.data); // Adiciona o log aqui
      this.book = response.data; // Preenche os dados do livro
    } catch (error) {
      console.error('Erro ao buscar informações do livro:', error);
    }
  }
}
};
</script>
