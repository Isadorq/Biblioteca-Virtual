<template>
  <NavBar>

  </NavBar>
    <main>
     <div class="container">
      <div class="link">
        <RouterLink to="./ListaLivro">Lista de Livros</RouterLink>
      </div>
      <div class="link">
        <Router-link to="./AddLivro">Adicionar Livros</Router-link>
      </div>
      <div class=link>
        <Router-link to="./AddUser">Adicionar Usuário</Router-link>
      </div>
      <div class=link>
        <Router-link to="./ListaLogin">Lista de Usuários</Router-link>
      </div>
     </div> 
    </main>

</template>
  
  <script>  
  import NavBar from '@/components/NavBar.vue';

  export default {
    components: {
    NavBar
  }
  };
  </script>
  
  <style scoped>
    /* .navbar {
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
} */

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

  .container {
    background-color: #575A5E;
    border-radius: 5px;
    height: 200px; 
    width: 300px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin: auto;
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    padding: 20px;
  }

  .link {
    color: white;
    text-decoration: none;
    margin: 10px 0; 
    font-size: 18px;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
  