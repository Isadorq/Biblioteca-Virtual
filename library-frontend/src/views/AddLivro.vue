<script setup>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import { ref } from 'vue';

const formRef = ref(null);

// Função para enviar o formulário
const submitForm = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    const formData = new FormData(formRef.value); // Coleta os dados do formulário, incluindo o arquivo de imagem

    try {
        // Envia os dados para o backend usando POST
        const response = await axios.post('http://localhost:3000/api/books', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Necessário para enviar arquivos
            }
        });

        // Se o cadastro for bem-sucedido, exibe a mensagem
        alert('Livro cadastrado com sucesso!');
        console.log(response.data);
    } catch (error) {
        // Em caso de erro, exibe a mensagem de erro
        console.error('Erro ao cadastrar:', error.response?.data?.message || error.message);
    }
};
</script>

<template>
<NavBar />
        <div class="form-container">
            <h1>Cadastro de Livro</h1>
            <form ref="formRef" @submit="submitForm">
                <div class="form-group">
                    <div class="lab-input">
                        <label for="title">Título</label>
                        <input type="text" id="title" name="title" required />
                    </div>

                    <div class="lab-input">
                        <label for="author">Autor</label>
                        <input type="author" id="author" name="author" required />
                    </div>
                </div>
                <div class="form-group">
                    <div class="lab-input">
                        <label for="image">Imagem do Livro</label>
                        <input type="file" id="image" name="image" accept="image/*" required />
                    </div>

                    <div class="lab-input">
                        <label for="year">Ano de Publicação</label>
                        <input type="number" id="year" name="year" required />
                    </div>
                </div>
                <div class="form-group1">
                    <div class="lab-input">
                        <label for="description">Descrição</label>
                        <textarea id="description" name="description" required></textarea>
                    </div>

                    <button type="submit">Confirmar</button>
                </div>
            </form>
        </div>
</template>


<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    padding: 40px 120px;
    border-radius: 8px;
    width: 100%;
}
.form-container h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 24px;
    color: #333;
}
.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.form-group1{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.form-group1 button{
    width: 120px;
    height: 40px;
    font-size: 15px;
    border: none;
    color: #fff;
    border-radius: 10px;
    background-color: #12a356;
    cursor: pointer;
}

.form-group1 textarea{
    max-width: 500px;
    min-width: 500px;
    max-height: 150px;
    min-height: 150px;
} 

.form-group label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}
.form-group input, 
.form-group select, 
.form-group textarea {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}
.form-group textarea {
    resize: none;
    height: 100px;
}
.form-group input[type="file"] {
    padding: 10px;
}
.form-group button {
    width: 100%;
    padding: 10px;
    background-color: #5cb85c;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}
.form-group button:hover {
    background-color: #4cae4c;
}

.lab-input{
    display: flex;
    flex-direction: column;
}
</style>