<template>
  <div>
    <nav>
      <div class="navbar">
        <ul class="icon">
          <li>
            <a href="#sidebar">
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
        <div class="logo">
          <img src="/logoTransparent.png" alt="Logo" />
        </div>
        <div class="search">
          <input type="text" placeholder="Search your book ☠️" v-model="searchQuery" />
        </div>
        <ul class="right-icons">
          <li>
            <a href="#user">
              <i class="fa-solid fa-skull" style="color: #ffffff;"></i>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <i class="fa-solid fa-bell" style="color: #ffffff;"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <section class="box">
        <h1>{{ title }}</h1>
      </section>

      <div class="main-container">
        <div class="container">
          <!-- Conteúdo dinâmico aqui -->
        </div>
        <div class="container-wrapper">
          <div class="description">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>

      <form class="inputs" @submit.prevent="submitForm">
        <div class="field" v-for="(field, index) in fields" :key="index">
          <label :for="field.id"><strong>{{ field.label }}</strong></label>
          <input type="text" :id="field.id" v-model="field.value" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>

    <footer>
      <!-- Conteúdo do rodapé -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      title: "Título",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ipsum sem, luctus bibendum risus egestas in.`,
      fields: [
        { id: "genre", label: "Gênero", value: "" },
        { id: "author", label: "Autor", value: "" },
        { id: "year", label: "Ano de publicação", value: "" },
        { id: "code", label: "Código", value: "" },
        { id: "status", label: "Status", value: "" },
        { id: "quantity", label: "Quantidade", value: "" }
      ]
    };
  },
  methods: {
    submitForm() {
      // Lógica de envio
      console.log("Formulário enviado:", this.fields);
    }
  }
};
</script>

<style scoped>
body {
  background-color: #727374;
  font-family: "Texturina", serif;
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #575a5e;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.icon {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.logo {
  margin-left: 60px;
}

.logo img {
  width: 80px;
  height: 80px;
}

.search input {
  width: 200px;
  height: 35px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left: 20px;
}

.right-icons {
  list-style: none;
  display: flex;
  margin-left: auto;
}

.right-icons li {
  margin-left: 20px;
}

.box {
  background-color: white;
  border-radius: 5px;
  width: 370px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}

.main-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.container,
.description {
  background-color: white;
  border-radius: 5px;
  width: 300px;
  padding: 15px;
}

.inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.field label {
  margin-bottom: 5px;
}

.field input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #575a5e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4a4d4e;
}
</style>
