<template>
    <div class="home-container">
      <h1>Bem-vindo à Biblioteca Virtual!</h1>
      <p>Explore nossa vasta coleção de livros e recursos. Aqui você pode encontrar o que há de melhor em literatura.</p>
  
      <div class="home-actions">
        <button @click="goToAboutPage" class="action-button">Saiba mais sobre nós</button>
        <button @click="goToContactPage" class="action-button">Entre em contato</button>
      </div>
  
      <div class="featured-books">
        <h2>Livros em Destaque</h2>
        <ul>
          <li v-for="book in featuredBooks" :key="book.id" class="book-item">
            <strong>{{ book.title }}</strong> - {{ book.author }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        featuredBooks: [
          { id: 1, title: 'Dom Casmurro', author: 'Machado de Assis' },
          { id: 2, title: 'O Primo Basílio', author: 'José de Alencar' },
          { id: 3, title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' },
        ],
      };
    },
    methods: {
      goToAboutPage() {
        this.$router.push({ name: 'About' });
      },
      goToContactPage() {
        this.$router.push({ name: 'Contact' });
      },
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    text-align: center;
  }
  
  h1 {
    color: #333;
    font-size: 2.5em;
  }
  
  p {
    color: #666;
    font-size: 1.2em;
    margin: 20px 0;
  }
  
  .home-actions {
    margin-top: 30px;
  }
  
  .action-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.1em;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px;
  }
  
  .action-button:hover {
    opacity: 0.8;
  }
  
  .featured-books {
    margin-top: 50px;
  }
  
  .featured-books h2 {
    font-size: 1.8em;
    color: #333;
  }
  
  .book-item {
    font-size: 1.2em;
    color: #555;
    margin: 10px 0;
  }
  </style>