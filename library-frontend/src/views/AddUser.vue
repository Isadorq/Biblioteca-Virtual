<template>
  <div class="form-container">
    <h1>Cadastro de Usuário</h1>
    <form ref="formRef" @submit="submitForm">
      <div class="form-group">
        <label for="username">Nome de Usuário</label>
        <input type="text" id="username" name="username" v-model="username" required />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirmar Senha</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>

      <button type="submit">Cadastrar</button>
    </form>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
// import NavBar from '../components/NavBar.vue';


const formRef = ref(null);
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const submitForm = async (event) => {
  event.preventDefault();

  // Verifica se as senhas são iguais
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'As senhas não coincidem';
    return;
  }

  const userData = {
    username: username.value,
    email: email.value,
    password: password.value
  };

  try {
    const response = await axios.post('http://localhost:3000/api/users/register', userData);
    successMessage.value = response.data.message;
    errorMessage.value = ''; // Limpa a mensagem de erro caso o cadastro seja bem-sucedido
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Erro ao cadastrar o usuário';
    successMessage.value = ''; // Limpa a mensagem de sucesso caso o cadastro falhe
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.form-container h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #333;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  font-weight: bold;
  color: #555;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
.error-message {
  color: red;
  text-align: center;
  margin-top: 15px;
}
.success-message {
  color: green;
  text-align: center;
  margin-top: 15px;
}
</style>
