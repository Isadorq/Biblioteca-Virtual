<template>
  <div id="app">
    <nav>
      <div class="navbar">
        <ul class="icon">
          <li>
            <a href="#" id="menu-toggle" @click="toggleSidebar">
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
        <div class="logo">
          <img src="/logoTransparent.png" alt="Logo">
        </div>
        <div class="search">
          <input type="text" placeholder="Search ur book ☠️">
        </div>
        <ul class="right-icons">
          <li>
            <a href="#" id="skull-toggle" @click="togglePopup">
              <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>

        <div class="popup" v-show="isPopupVisible">
          <p>Usuário</p>
          <p>Queen never CRY</p>
          <p>Who's this DIVA</p>
        </div>

        <div class="sidebar" :class="{ open: isSidebarOpen }">
          <ul>
            <li class="iconE">
              <i class="fa-solid fa-skull"></i>
              <p class="letter">Usuário</p>
            </li>
            <li class="iconE">
              <i class="fa-solid fa-bell"></i>
              <p class="letter">Notificações</p>
            </li>
            <li class="iconE">
              <i class="fa-solid fa-folder"></i>
              <p class="letter">Relatório</p>
            </li>
            <li class="iconE">
              <i class="fa-solid fa-list" style="color: #ffffff;"></i>
              <p>Filtros</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <div class="banner">
        <img src="/banner 1.png" alt="Banner">
      </div>

      <div class="container">
        <div class="livro" v-for="(book, index) in books" :key="index">
          <img :src="book.image" alt="Book">
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      isPopupVisible: false,
      books: [
        { image: "../../Imagens/coraline.jpeg" },
        { image: "../../Imagens/pauloFreire.jpeg" },
        { image: "../../Imagens/GOT.jpg" },
        { image: "../../Imagens/ASAdLoF.jpg" }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    }
  }
};
</script>

<style scoped>
body {
  background-color: #727374;
  font-family: 'Texturina', serif;
  margin: 0;
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
}

.icon {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center; 
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
  list-style-type: none;
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

.banner img {
  width: 815px;
  height: 350px;
  border-radius: 5px;
}

.banner {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  border-radius: 5px;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  width: 100%; 
}

.livro {
  background-color: #575A5E;
  width: 211px;
  height: 342px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.livro img {
  height: 200px;
  margin-top: 10px;
}

.star {
  display: flex;    
  justify-content: center;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #575A5E;
  color: white;
  overflow-y: auto;
  transition: left 0.3s ease, opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 1000;
}

.sidebar.open {
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.iconE {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 18px;
  width: 45px;
  height: 45px;
}

.iconE i {
  font-size: 24px;
  color: white;
}

.iconE .letter {
  color: white;
}

.navbar.shift {
  margin-left: 250px;
}

.popup {
  display: none;
  position: relative;
  top: 100%;
  left: 86%;
  transform: translateX(-50%);
  background-color: #575A5E;
  color: white;
  padding: 20px;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.popup p {
  margin: 10px 0;
}
</style>
