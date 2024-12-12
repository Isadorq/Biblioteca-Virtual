<template>
    <div>
      <NavBar />
      <div class="users-container">
        <h2>Lista de Usuários</h2>
        <div v-if="users.length === 0">Nenhum usuário encontrado.</div>
        <ul v-else>
          <li v-for="user in users" :key="user._id" class="user-item">
            <span>{{ user.username }} - {{ user.email }}</span>
            <button @click="deleteUser(user._id)">Excluir</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    name: 'UsersList',
    components: {
      NavBar
    },
    data() {
      return {
        users: [], // Lista de usuários
      };
    },
    mounted() {
      this.fetchUsers(); // Chama o método para buscar os usuários ao montar o componente
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('http://localhost:3000/api/usuarios');
          this.users = response.data;
        } catch (error) {
          console.error("Erro ao carregar usuários:", error);
        }
      },
  
      async deleteUser(userId) {
        try {
          await axios.delete(`http://localhost:3000/api/usuarios/${userId}`);
          this.users = this.users.filter(user => user._id !== userId); // Remove o usuário da lista após excluir
        } catch (error) {
          console.error("Erro ao excluir usuário:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .users-container {
    padding: 20px;
  }
  
  h2 {
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .user-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: darkred;
  }
  </style>
  