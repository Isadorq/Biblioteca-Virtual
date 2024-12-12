<template>
  <NavBar /> 
  <div class="book-container">
    <div class="book-info">
      <div class="book-image">
        <img src="../../public/pedagogia-do-oprimido (1).jpg" alt="Imagem do Livro">
      </div>
      <div class="book-details">
        <h1>{{ book.title }}</h1>
        <p>{{ book.description }}</p> 

        <div class="book-additional-info">
          <label for="launch-date">Data de Lançamento:</label>
          <input type="date" id="launch-date" v-model="book.launchDate">

          <label for="author">Autor:</label>
          <input type="text" id="author" v-model="book.author">

          <label for="id">ID do Livro:</label>
          <input type="text" id="id" v-model="book.id" disabled>

          <label for="status">Status:</label>
          <select id="status" v-model="book.status">
            <option value="disponivel">Disponível</option>
            <option value="indisponivel">Indisponível</option>
          </select>

          <!-- Botão de Reservar -->
          <button @click="reserveBook" :disabled="book.status !== 'disponivel'" class="reserve-button">
            Reservar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue'; // Importação correta da NavBar

export default {
  name: 'BookDetails',  // Defina um nome para o componente
  components: {
    NavBar, // Registra o componente NavBar para ser usado no template
  },
  data() {
    return {
      book: {
        title: '',
        description: '',
        image: '',
        launchDate: '',
        author: '',
        id: '',
        status: 'disponivel', // O status inicial será "disponível"
      },
    };
  },
  async created() {
    const bookId = this.$route.params.id; // Pega o ID do livro na URL
    await this.fetchBook(bookId); // Chama a função para buscar as informações do livro
  },
  methods: {
    async fetchBook(id) {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        console.log('Livro carregado:', response.data);
        this.book = response.data; // Preenche os dados do livro
      } catch (error) {
        console.error('Erro ao buscar informações do livro:', error);
      }
    },

    // Método para reservar o livro
    async reserveBook() {
      if (this.book.status === 'disponivel') {
        this.book.status = 'reservado'; // Atualiza o status localmente
        try {
          const response = await axios.put(`http://localhost:3000/api/books/${this.book.id}`, {
            status: 'reservado',
          });
          console.log('Livro reservado:', response.data);
          this.book = response.data; // Atualiza os dados do livro após reserva
        } catch (error) {
          console.error('Erro ao reservar o livro:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
.book-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.book-info {
  display: flex;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.book-image {
  margin-right: 20px;
  flex-shrink: 0;
}

.book-img {
  max-width: 200px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.book-details {
  flex-grow: 1;
}

.book-additional-info {
  margin-top: 20px;
}

.book-additional-info label {
  display: block;
  margin-bottom: 5px;
}

.book-additional-info input,
.book-additional-info select {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Estilos para o botão de reservar */
.reserve-button {
  background-color: #4CAF50; /* Cor verde */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.reserve-button:disabled {
  background-color: #ccc; /* Cor para quando o botão estiver desabilitado */
  cursor: not-allowed;
}

.reserve-button:hover {
  background-color: #45a049; /* Cor quando o botão for pressionado */
}
</style>