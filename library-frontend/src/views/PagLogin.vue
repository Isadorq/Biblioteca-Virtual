<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="input-container">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="input-container">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div class="button-container">
        <button type="submit">Login</button>
        <router-link to="/PagCadastro" class="register-link">Cadastro</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      if (this.username && this.password) {
        // Simula uma ação de login bem-sucedida
        alert('Login realizado com sucesso!');
        // Redireciona para a página inicial após o login
        this.$router.push('/PagInicial');
      } else {
        // Exibe um alerta se os campos não forem preenchidos
        alert('Por favor, preencha todos os campos.');
      }
    },
  },
};
</script>

<style scoped>
/* Estiliza o corpo da página para centralizar a div de login */
body {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  margin: 0;
  height: 100vh; /* Ocupa toda a altura da janela */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
}

/* Estiliza o container do login */
.login {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; /* Largura máxima do formulário */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; /* Inclui o padding nas dimensões totais */
}

/* Estiliza o título */
h1 {
  text-align: center;
  margin-bottom: 20px;
}

/* Container para os campos de input */
.input-container {
  width: 100%;
  margin-bottom: 15px;
}

/* Estiliza os labels */
.input-container label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

/* Estiliza os inputs */
.input-container input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Container para os botões e links */
.button-container {
  display: flex;
  justify-content: space-between; /* Botão e link em lados opostos */
  align-items: center;
  width: 100%;
}

/* Estiliza o botão de login */
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Efeito hover para o botão */
button:hover {
  background-color: #45a049;
}

/* Estiliza o link de cadastro */
.register-link {
  font-size: 14px;
  color: #007BFF;
  text-decoration: none;
}

/* Efeito hover para o link de cadastro */
.register-link:hover {
  text-decoration: underline;
}
</style>
