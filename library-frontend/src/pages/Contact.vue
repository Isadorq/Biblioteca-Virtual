<template>
    <div class="contact-container">
      <h1>Entre em Contato</h1>
      <p>Se você tem alguma dúvida ou sugestão, não hesite em nos contatar. Estamos aqui para ajudar!</p>
      
      <div class="contact-details">
        <h2>Informações de Contato</h2>
        <ul>
          <li>
            <strong>Endereço:</strong> Rua Exemplo, 123 - Cidade, Estado - Brasil
          </li>
          <li>
            <strong>Telefone:</strong> +55 (11) 1234-5678
          </li>
          <li>
            <strong>E-mail:</strong> contato@bibliotecavirtual.com.br
          </li>
        </ul>
      </div>
  
      <div class="contact-form">
        <h2>Formulário de Contato</h2>
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div>
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div>
            <label for="message">Mensagem:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        // Aqui você pode enviar o formulário para um servidor ou processar os dados
        console.log("Formulário enviado", this.form);
        // Limpar o formulário após o envio
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
        alert("Mensagem enviada com sucesso!");
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 2em;
    color: #333;
  }
  
  h2 {
    font-size: 1.5em;
    color: #555;
    margin-top: 20px;
  }
  
  p {
    font-size: 1.1em;
    color: #666;
    line-height: 1.6;
  }
  
  .contact-details ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }
  
  .contact-details li {
    font-size: 1.1em;
    color: #555;
    margin-bottom: 10px;
  }
  
  .contact-form {
    margin-top: 40px;
  }
  
  .contact-form div {
    margin-bottom: 15px;
  }
  
  .contact-form label {
    font-size: 1.1em;
    color: #333;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .contact-form button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.1em;
  }
  
  .contact-form button:hover {
    opacity: 0.8;
  }
  
  </style>
  