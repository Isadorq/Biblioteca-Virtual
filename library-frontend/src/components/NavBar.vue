<template>
    <div>
      <nav>
        <div class="navbar">
          <!-- <ul class="icon" style="list-style-type: none;">
            <li> -->
              <!-- Ícone de menu removido ou pode ser adicionado aqui -->
            <!-- </li>
          </ul> -->
  
          <!-- Logo -->
          <div class="logo">
            <router-link to="/PagInicial">
              <img src="/logoTransparent.png" alt="Logo" />
            </router-link>
          </div>
  
          <!-- Links de navegação principais -->
          <div class="nav-links">
            <router-link to="/MaisLivros" class="nav-link">Mais Opções</router-link>
          </div>
  
          <!-- Barra de pesquisa -->
          <div class="search">
            <input
              type="text"
              placeholder="Pesquise o livro ou ID"
              v-model="searchQuery"
              @input="filterBooks"
            />
          </div>
  
          <!-- Ícones da direita -->
          <ul class="right-icons" style="list-style-type: none;">
            <li>
              <router-link to="/PagUser">
                <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
              </router-link>
            </li>
            <li>
              <div class="notification-container">
                <div class="notification-icon" @click="toggleNotifications">
                  <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
                  <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span>
                </div>
                <div v-if="isOpen" class="notification-dropdown">
                  <div v-if="notifications.length === 0" class="notification-empty">
                    <p>Sem notificações no momento.</p>
                  </div>
                  <ul>
                    <li v-for="(notification, index) in notifications" :key="index">
                      {{ notification.message }}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "NavBar",
    data() {
      return {
        books: [],
        searchQuery: '',
        filteredBooks: [],
        isOpen: false,
        notifications: [
          { message: "Livro 'Gótico dos Sonhos' está disponível!" },
          { message: "Livro 'A Essência do Gótico' foi reservado." },
        ],
      };
    },
    computed: {
      unreadCount() {
        return this.notifications.length;
      },
    },
    async mounted() {
      await this.fetchBooks();
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await axios.get('http://localhost:3000/api/books');
          this.books = response.data;
          this.filteredBooks = this.books;
        } catch (error) {
          console.error('Erro ao buscar livros:', error);
        }
      },
      filterBooks() {
        const query = this.searchQuery.toLowerCase();
        this.filteredBooks = this.books.filter(book => {
          return (
            book.title.toLowerCase().includes(query) ||
            book._id.includes(query)
          );
        });
      },
      toggleNotifications() {
        this.isOpen = !this.isOpen;
      },
    },
  };
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
  
  .nav-links {
    display: flex;
    gap: 20px;
    margin-left: 20px;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav-link:hover {
    text-decoration: underline;
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
  
  .notification-container {
    position: relative;
  }
  
  .notification-icon {
    cursor: pointer;
    position: relative;
  }
  
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }
  
  .notification-dropdown {
    position: absolute;
    right: 0;
    top: 40px;
    background-color: white;
    border-radius: 5px;
    width: 250px;
    z-index: 100;
  }
  
  .notification-dropdown ul {
    list-style: none;
    padding: 0;
  }
  
  .notification-dropdown li {
    padding: 10px;
  }
  </style>
  