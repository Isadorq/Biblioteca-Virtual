<template>
    <div class="main-container">
      <div class="containerReg">
        <div class="title">
          <h1>Login</h1>
        </div>
  
        <div class="put">
          <input type="text" v-model="username" placeholder="Usuário" />
          <input type="text" v-model="email" placeholder="E-mail" />
          <input type="password" v-model="password" placeholder="Senha" />
        </div>
 
        <div class="button">
          <div class="send">
            <a href="./../Página Inicial/index.html">
              <input type="button" value="Enviar" />
            </a>
          </div>
          <div class="register">
            <a href="./../Página Cadastro/register.html">
              <input type="button" value="Cadastre-se" />
            </a>
          </div>
        </div>
      </div>

      <div class="logo">
        <img src="../../Imagens/logoTransparent.png" alt="Logo" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
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
    width: 80%;
    max-width: 1200px;
    gap: 20px;
  }
  
  .containerReg {
    background-color: white;
    border-radius: 5px;
    width: 600px;
    height: 404px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .put {
    width: 100%;
  }
  
  .put input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .logo {
    text-align: center;
  }
  
  img {
    width: 450px;
    height: 450px;
  }
  
  .button {
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
  }
  
  .send input,
  .register input {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    background-color: #727374;
    color: white;
    height: auto;
    width: 100%;
  }
  </style>  