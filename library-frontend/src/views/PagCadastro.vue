<template>
    <div class="main-container">
      <div class="containerReg">
        <div class="title">
          <h1>Cadastro</h1>
        </div>
        <div class="put">
          <input type="text" placeholder="Usuário" v-model="user">
          <input type="text" placeholder="E-mail" v-model="email">
          <input type="password" placeholder="Senha" v-model="password">
        </div>
      </div>
  
      <div class="logo">
        <img src="/logoTransparent.png" alt="Logo">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: '',
        email: '',
        password: ''
      };
    },
    methods: {
      registerUser() {
        console.log(`Usuário: ${this.user}, E-mail: ${this.email}, Senha: ${this.password}`);
        // Aqui você pode adicionar lógica de envio de dados, como uma requisição à API
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    background-color: #727374;
    font-family: 'Texturina', serif;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .main-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%; /* Ajuste a largura conforme necessário */
    max-width: 1200px; /* Limite de largura máxima */
  }
  
  .containerReg {
    background-color: white;
    border-radius: 5px;
    width: 600px;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .put input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
  }
  
  .logo {
    text-align: center;
  }
  
  img {
    width: 404px;
    height: auto;
  }
  </style>
  