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
        <div class="main-container">
          <div class="top-container">
            <h1 class="box">
              <h1>Usuário</h1>
            </h1>
              <div class="description">
                 <p>blala</p>
               </div>
          </div>
        </div>
      </main>
  
      <footer>
       
      </footer>
    </div>
  </template>
  
  <script>
  
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
    height: 488px;
  }

</style>