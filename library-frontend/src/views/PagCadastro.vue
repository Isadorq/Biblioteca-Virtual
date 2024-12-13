<template>
  <div>
    <main>
      <div class="main-container">
        <div class="top-container">
          <div class="description">
            <h1>Cadastro</h1>
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
