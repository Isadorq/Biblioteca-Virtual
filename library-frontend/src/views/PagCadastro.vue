<template>
  <div>
    <nav>
      <div class="navbar">
        <ul class="icon">
          <li>
            <!-- Ícone de menu (opcional) -->
          </li>
        </ul>
        <div class="logo">
          <router-link to="/PagInicial">
            <img src="/logoTransparent.png" alt="Logo" />
          </router-link>
        </div>
        <div class="search">
          <input type="text" placeholder="Search your book ☠️" v-model="searchQuery" />
        </div>
        <ul class="right-icons">
          <li>
            <a href="#user">
              <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <div class="main-container">
        <div class="top-container">
          <h1 class="box">
            <h1>Cadastro</h1>
          </h1>

          <!-- Formulário de Cadastro -->
          <div class="description">
            <form @submit.prevent="handleRegister">
              <div>
                <label for="name">Nome</label>
                <input type="text" v-model="name" id="name" required />
              </div>
              <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" required />
              </div>
              <div>
                <label for="password">Senha</label>
                <input type="password" v-model="password" id="password" required />
              </div>
              <div>
                <label for="confirmPassword">Confirmar Senha</label>
                <input type="password" v-model="confirmPassword" id="confirmPassword" required />
              </div>

              <button type="submit">Cadastrar</button>
            </form>
            <p>Já tem uma conta? <router-link to="/PagLogin">Faça login aqui!</router-link></p>
          </div>
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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async handleRegister() {
      // Verificando se as senhas coincidem
      if (this.password !== this.confirmPassword) {
        alert('As senhas não coincidem.');
        return;
      }

      // Lógica de envio para a API (por exemplo, com axios)
      // Após o cadastro bem-sucedido:
      alert('Cadastro realizado com sucesso!');
      
      // Redireciona para a página de login
      this.$router.push('/PagLogin');
    },
  },
};
</script>

<style scoped>
/* Estilos da Navbar, container principal e formulário de cadastro */
body {
  background-color: #727374;
  font-family: "Texturina", serif;
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #575a5e;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.icon {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.logo {
  margin-left: 60px;
}

.logo img {
  width: 80px;
  height: 80px;
}

.search input {
  width: 200px;
  height: 35px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left: 20px;
}

.right-icons {
  list-style: none;
  display: flex;
  margin-left: auto;
}

.right-icons li {
  margin-left: 20px;
}

.main-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
}

.top-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.description {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-left: 20px;
  width: 622px;
  height: 350px;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 15px;
}

form input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #575a5e;
  color: white;
  cursor: pointer;
}
</style>
