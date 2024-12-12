<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <ul class="icon">
        <!-- <li>
          <button @click="toggleSidebar" class="menu-button">
            <i class="fa-solid fa-bars"></i>
          </button>
        </li> -->
      </ul>
      <div class="logo">
        <router-link to="PagInicial">
          <img src="/logoTransparent.png" alt="Logo"/>
        </router-link>
        
      </div>
      <div class="search">
        <input type="text" placeholder="Search ur book ☠️" v-model="searchTerm" />
      </div>
      <ul class="right-icons">
        <li>
          <button @click="togglePopup" class="skull-button">
            <i class="fa-solid fa-skull"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-bell"></i>
          </button>
        </li>
      </ul>
    </nav>

    <!-- <div class="sidebar" :class="{ open: isSidebarOpen }">
      <ul>
        <li class="iconE">
          <i class="fa-solid fa-skull"></i>
          <p>Usuário</p>
        </li>
        <li class="iconE">
          <i class="fa-solid fa-bell"></i>
          <p>Notificações</p>
        </li>
        <li class="iconE">
          <i class="fa-solid fa-folder"></i>
          <p>Relatório</p>
        </li>
        <li class="iconE">
          <i class="fa-solid fa-list"></i>
          <p>Filtros</p>
        </li>
      </ul>
    </div> -->

    <div class="popup" v-if="isPopupVisible">
      <p>Usuário</p>
      <p>Queen never CRY</p>
      <p>Who's this DIVA</p>
    </div>

    <main class="mainContainer">
      <div class="containerWrapper">
        <div class="description">
          <div class="box">
            <h1>Adicionar Usuário</h1>
          </div>
          <form @submit.prevent="submitForm">
            <div class="inputs">
              <div class="campo" v-for="(field, index) in formFields" :key="index">
                <label :for="field.name"><strong>{{ field.label }}:</strong></label>
                <input
                  v-if="field.type !== 'file'"
                  :type="field.type"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                />
                <input
                  v-if="field.type === 'file'"
                  type="file"
                  :id="field.name"
                  :name="field.name"
                  @change="handleFileUpload"
                />
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>

    <div v-if="users.length">
      <h2>Lista de Usuários</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p>{{ user.name }} - {{ user.email }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
        { name: 'permission', label: 'Permissão', type: 'text' },
        { name: 'contact', label: 'Contato', type: 'text' },
        { name: 'photo', label: 'Envie uma foto', type: 'file' },
      ],
      users: [], // Lista de usuários para exibir
      searchTerm: '', // Termo de busca para usuários ou livros
    };
  },
  methods: {
    // toggleSidebar() {
    //   this.isSidebarOpen = !this.isSidebarOpen;
    // },
    // togglePopup() {
    //   this.isPopupVisible = !this.isPopupVisible;
    // },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.formData.photo = file;
    },
    submitForm() {
      console.log('Form Submitted:', this.formData);
      this.addUser();
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        permission: '',
        contact: '',
        photo: null,
      };
    },
    addUser() {
      const newUser = { ...this.formData, id: Date.now() }; // Simulação de ID único
      this.users.push(newUser); // Adiciona o usuário à lista
      alert('Usuário adicionado com sucesso!');
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
