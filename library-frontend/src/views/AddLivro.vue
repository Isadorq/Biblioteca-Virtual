<template>
  <div>
    <nav>
      <div :class="['navbar', { shift: isSidebarOpen }]">
        <ul class="icon">
          <li>
            <a href="#" @click.prevent="toggleSidebar">
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
        <div class="logo">
          <img src="/logoTransparent.png" alt="Logo">
        </div>
        <div class="search">
          <input type="text" placeholder="Search ur book ☠️" v-model="searchTerm">
        </div>
        <ul class="right-icons">
          <li>
            <a href="#" @click.prevent="togglePopup">
              <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
        <div v-if="isPopupVisible" class="popup">
          <p>Usuário</p>
          <p>Queen never CRY</p>
          <p>Who's this DIVA</p>
        </div>
      </div>
    </nav>

    <main>
      <div class="mainContainer">
        <div class="containerWrapper">
          <div class="descrition">
            <div class="box">
              <div class="title">
                <h1>Adicionar Livro</h1>
              </div>
              <div class="bat">
                <img src="/morcego.png" alt="">
              </div>
            </div>
            <div class="inpust">
              <!-- Use o BookForm aqui -->
              <BookForm 
                @book-added="onBookAdded"
                @book-updated="onBookUpdated"
                :book-form="bookForm"
                :book-fields="bookFields"
                @file-upload="handleFileUpload" 
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import BookForm from '../components/BookForm.vue';

export default {
  components: {
    BookForm,
  },
  data() {
    return {
      isSidebarOpen: false,
      isPopupVisible: false,
      searchTerm: '',
      bookFields: ['Título', 'Autor', 'Data de lançamento', 'ISBN'],
      bookForm: {
        Título: '',
        Autor: '',
        'Data de lançamento': '',
        ISBN: '',
      },
      selectedFile: null,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      console.log('Arquivo selecionado:', this.selectedFile);
    },
    onBookAdded(book) {
      // Lógica para quando um livro for adicionado
      console.log('Livro adicionado:', book);
      // Aqui você pode fazer algo como limpar o formulário, atualizar a lista de livros, etc.
    },
    onBookUpdated(book) {
      // Lógica para quando um livro for atualizado
      console.log('Livro atualizado:', book);
      // Aqui você pode realizar ações como atualizar o livro na lista, etc.
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
  align-items: center;
}

.logo img {
  width: 80px;
  height: 80px;
}

.search input {
  width: 134px;
  height: 15px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.right-icons {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.right-icons li {
  margin-left: 20px;
}

.box {
  background-color: white;
  border-radius: 5px;
  font-size: larger;
  width: 370px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}

.mainContainer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  gap: 90px;
}

.containerWrapper {
  display: flex;
  align-items: flex-start;
}

.descrition {
  background-color: white;
  border-radius: 5px;
  width: 680px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.inpust {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.campo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #575A5E;
  color: white;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sidebar.open {
  left: 0;
}

.popup {
  display: none;
  position: absolute;
  background-color: #575A5E;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.popup {
  display: block;
}
</style>
