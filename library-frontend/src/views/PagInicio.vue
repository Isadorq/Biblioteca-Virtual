<template>
  <div class="container-principal">
    <!-- Navbar and Sidebar content here (não modificados) -->

    <!-- Formulário para adicionar usuário -->
    <main class="mainContainer">
      <div class="containerWrapper">
        <div class="description">
          <div class="box">
            <h1>Adicionar Usuário</h1>
          </div>
          <form @submit.prevent="submitForm">
            <div class="inputs">
              <div class="campo" v-for="(field, index) in formFields" :key="index">
                <label :for="field.name"><strong>{{ field.label }}:</strong></label>
                <input
                  v-if="field.type !== 'file'"
                  :type="field.type"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                />
                <input
                  v-if="field.type === 'file'"
                  type="file"
                  :id="field.name"
                  :name="field.name"
                  @change="handleFileUpload"
                />
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        permission: '',
        contact: '',
        photo: null,
      },
      formFields: [
        { name: 'name', label: 'Nome', type: 'text' },
        { name: 'email', label: 'E-mail', type: 'email' },
        { name: 'permission', label: 'Permissão', type: 'text' },
        { name: 'contact', label: 'Contato', type: 'text' },
        { name: 'photo', label: 'Envie uma foto', type: 'file' },
      ],
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.formData.photo = file;
    },
    submitForm() {
      console.log('Form Submitted:', this.formData);
      alert('Usuário adicionado com sucesso!');
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        permission: '',
        contact: '',
        photo: null,
      };
    },
  },
};
</script>

  <style scoped>
  body {
    background-color: #727374;
    font-family: "Texturina", serif;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container-principal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }
  
  .image {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding: 20px;
  }
  
  .image img {
    width: 550px;
    height: 550px;
    margin-left: 40px;
  }
  
  .container {
    flex: 1;
    background-color: #575a5e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    color: white;
  }
  
  .container a {
    text-decoration: none;
    color: white;
  }
  
  .box {
    background-color: #727374;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px 0;
    width: 200px;
    text-align: center;
  }
  </style>
  