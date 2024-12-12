<template>
  <div>
    <nav>
      <div class="navbar">
        <ul class="icon">
          <li>
            <!-- <a href="#sidebar">
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </a> -->
          </li>
        </ul>
        <div class="logo">
          <router-link to="/PagInicial">
            <img src="/logoTransparent.png" alt="Logo" />
          </router-link>
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
        <div class="top-container">
          <div class="book-stars-container">
            <div class="book"></div>
            <div class="stars-container">
              <div class="star">
                <i class="fa-solid fa-star" style="color: #ffffff;"></i>
              </div>
              <div class="star">
                <i class="fa-solid fa-star" style="color: #ffffff;"></i>
              </div>
              <div class="star">
                <i class="fa-solid fa-star" style="color: #ffffff;"></i>
              </div>
              <div class="star">
                <i class="fa-regular fa-star" style="color: #ffffff;"></i>
              </div>
              <div class="star">
                <i class="fa-regular fa-star" style="color: #ffffff;"></i>
              </div>
            </div>
          </div>
          <div class="description">
            <p>{{ description }}</p>
          </div>
        </div>

        <div class="container">
          <form class="inputs" @submit.prevent="submitForm">
            <div class="row">
              <div class="field">
                <strong>Gênero:</strong>
                <input type="text" v-model="genre" />
              </div>
              <div class="field">
                <strong>Autor:</strong>
                <input type="text" v-model="author" />
              </div>
            </div>
            <div class="row">
              <div class="field">
                <strong>Ano de publicação:</strong>
                <input type="text" v-model="year" />
              </div>
              <div class="field">
                <strong>Código:</strong>
                <input type="text" v-model="code" />
              </div>
            </div>
            <div class="row">
              <div class="field">
                <strong>Status:</strong>
                <input type="text" v-model="status" />
              </div>
              <div class="field">
                <strong>Quantidade:</strong>
                <input type="text" v-model="quantity" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="comments">
        <div class="comment">
          <div class="iconn">
            <i class="fa-solid fa-comment" style="color: #000000;"></i>
          </div>
          <div class="strela">
            <i class="fa-solid fa-star" style="color: #000000;"></i>
          </div>
          <div class="strela">
            <i class="fa-solid fa-star" style="color: #000000;"></i>
          </div>
            <p>
              Muito bom!
            </p>
        </div>
        <div class="comment">
          <div class="iconn">
            <i class="fa-solid fa-comment" style="color: #000000;"></i>
          </div>
          <div class="strela">
            <i class="fa-solid fa-star" style="color: #000000;"></i>
          </div>
          <div class="strela">
            <i class="fa-solid fa-star" style="color: #000000;"></i>
          </div>
            <p>
              Horrível!
            </p>
        </div>
      </div>
    </main>

    <footer>
      
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
      genre: "",
      author: "",
      year: "",
      code: "",
      status: "",
      quantity: "",
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
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
}

.top-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.book-stars-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book {
  background-color: #575A5E;
  width: 274px;
  height: 407px;
}

.stars-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.star {
  font-size: 24px;
}

.description {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-left: 20px;
  width: 622px;
  height: 488px;
}

.container {
  background-color: white;
  border-radius: 5px;
  width: 600px; 
  padding: 15px;
  margin-top: 30px;  
}

.inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.field {
  display: flex;
  flex-direction: column;
  width: 45%;  
}

.field input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 105px;
}

.comment {
  background-color: white;
  border-radius: 5px;
  width: 382px;
  height: 126px;
}

.comments .comment .strela {
  display: inline-flex;
  margin-right: 5px;
}

.comments {
  display: flex;
  margin-top: 50px;
}

</style>