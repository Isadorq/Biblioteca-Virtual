<template>
  <div>
    <NavBar>
    </NavBar>

    <main>
      <div class="main-container">
        <div class="top-container">
          <h1>Informações do Usuário</h1>
          <div class="description">
            <p><strong>Nome:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <!-- Exibir gráfico aqui -->
            <div>
              <Bar :chart-data="chartData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <!-- Seu rodapé aqui -->
    </footer>
  </div>
</template>

<script>
// Importando as dependências necessárias do Chart.js e vue-chartjs
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'UserPage',
  components: {
    Bar, // Componente de gráfico de barras
  },
  data() {
    return {
      searchQuery: '',
      chartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Labels para o gráfico
        datasets: [
          {
            label: 'Livros Lidos',
            data: [5, 9, 7, 4, 8], // Dados do gráfico (quantidade de livros lidos por mês)
            backgroundColor: '#42A5F5', // Cor das barras
            borderColor: '#1E88E5', // Cor da borda das barras
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Estilos da sua página */
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
  height: 300px; /* Ajuste o tamanho conforme necessário */
}
</style>
