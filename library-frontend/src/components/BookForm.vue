<template>
    <form @submit.prevent="handleSubmitEvent">
      <input v-model="book.title" placeholder="Título" required />
      <input v-model="book.author" placeholder="Autor" required />
      <input v-model="book.year" placeholder="Ano" required type="number" />
      <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    props: ['bookToEdit'],
    data() {
      return {
        book: this.bookToEdit || { title: '', author: '', year: null },
      };
    },
    methods: {
      handleSubmitEvent() {
        if (this.book._id) {
          api.updateBook(this.book._id, this.book).then(() => {
            this.$emit('book-updated');  // Emite evento após atualização
          });
        } else {
          api.addBook(this.book).then(() => {
            this.$emit('book-added');  // Emite evento após adição
          });
        }
      },
    },
  };
  </script>  