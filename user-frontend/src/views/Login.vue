<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
            <div>
                <label>Email:</label>
                <input v-model="email" type="email" required>
            </div>
            <div>
                <label>Senha:</label>
                <input v-model="password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import api from '../axios'; // Importa a configuração do Axios

export default {
    data() {
        return {
            email: '',
            password: '',
            message: '',
        };
    },
    methods: {
        async loginUser() {
            try {
                const response = await api.post('/auth/login', {
                    email: this.email,
                    password: this.password,
                });
                this.message = 'Login bem-sucedido!';
                localStorage.setItem('token', response.data.token);     // Armazena o token JWT no localStorage
                this.$router.push('/dashboard');        // Redireciona para a página principal após o login
            }   catch(error) {
                this.message = error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'Erro ao fazer login';
            }
        },
    },
};
</script>

<style scoped>
.login{ 
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
}
</style>