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
        // Aqui você pode chamar a API de login
        alert('Login realizado com sucesso!');
        // Redireciona para a página principal após login
        this.$router.push('/dashboard');
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-container {
  width: 100%;
  margin-bottom: 15px;
}

.input-container label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

.input-container input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.register-link {
  font-size: 14px;
  color: #007BFF;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
