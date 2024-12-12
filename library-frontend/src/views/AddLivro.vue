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
      book: {
        title: '',
        author: '',
        year: null,
        description: '',
        image: null,
        status: 'available',  // Adicionando status com valor inicial 'available'
      },
    };
  },
  methods: {
    // Método para lidar com a mudança do arquivo de imagem
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.book.image = file;
      }
    },

    // Método para adicionar o livro
    async addBook() {
      const formData = new FormData();
      formData.append('title', this.book.title);
      formData.append('author', this.book.author);
      formData.append('year', this.book.year);
      formData.append('description', this.book.description);
      formData.append('status', this.book.status);  // Adicionando o status ao FormData

      // Verifica se a imagem foi selecionada
      if (this.book.image) {
        formData.append('image', this.book.image);
      } else {
        console.error('Nenhuma imagem selecionada.');
        return; // Retorna se não houver imagem
      }

      // Log dos dados que estão sendo enviados
      console.log('Dados enviados:', {
        title: this.book.title,
        author: this.book.author,
        year: this.book.year,
        description: this.book.description,
        image: this.book.image ? this.book.image.name : 'Nenhuma imagem',
        status: this.book.status,
      });

      try {
        const response = await axios.post('http://localhost:3000/api/books', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
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
    },
  },
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
}

.icon {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.logo img {
  width: 80px;
  height: 80px;
}

.search input {
  width: auto; /* Ajuste para ser responsivo */
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
  width: calc(100% - 40px); /* Ajusta a largura */
  max-width: 500px; /* Largura máxima */
  margin: 20px auto; /* Centraliza o formulário */
}

form {
  display: flex;
  flex-direction: column; /* Alinha os elementos em coluna */
}

input {
  margin-bottom: 10px; /* Espaçamento entre os inputs */
  padding: 8px; /* Preenchimento interno */
  border-radius: 4px; /* Bordas arredondadas */
  border: 1px solid #ccc; /* Borda cinza */
}

button {
  padding: 10px; /* Preenchimento interno do botão */
  background-color: #4CAF50; /* Cor de fundo verde */
  color: white; /* Cor do texto branco */
  border: none; /* Remove borda padrão */
  cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
  border-radius: 4px; /* Bordas arredondadas */
}

button:hover {
   background-color: #45a049; /* Cor de fundo ao passar o mouse */
}
</style>
