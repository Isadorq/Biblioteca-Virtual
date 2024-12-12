<template>
  <RouterView />

  <!-- <div id="app"> -->
    <!-- Formulário para adicionar ou editar um livro -->
    <!-- <BookForm :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" /> -->
    
    <!-- Lista de livros -->
    <!-- <BookList @edit-book="setBookToEdit" ref="bookList" /> -->

    <!-- Navegação -->
    <!-- <RouterLink to="/PagLogin">Login</RouterLink> -->
    <!-- <RouterLink to="/home">Home</RouterLink> Se você tiver uma rota '/home' -->
  <!-- </div> -->
</template>

<script>
// import { RouterLink } from 'vue-router'; // Importando RouterLink corretamente
// import BookList from './components/BookList.vue';
// import BookForm from './components/BookForm.vue';

// export default {
//   name: 'App',
  
//   data() {
//     return {
//       bookToEdit: null, // Estado do livro a ser editado
//     };
//   },
//   components: {
//     BookList,
//     BookForm,
//     RouterLink, // Registrando RouterLink como um componente
//   },
//   methods: {
//     // Função para definir o livro a ser editado
//     setBookToEdit(book) {
//       this.bookToEdit = book;
//     },
//     // Função para atualizar a lista de livros após adicionar ou editar
//     fetchBooks() {
//       this.$refs.bookList.fetchBooks();
//       this.bookToEdit = null; // Limpa o formulário após a ação
//     },
//   },
// };
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>