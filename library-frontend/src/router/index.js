import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Componente principal
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

// Definindo as rotas
const routes = [
    { path: '/home', name: 'Home', component: Home }, // Página inicial
    { path: '/about', name: 'About', component: About }, // Página sobre
    { path: '/contact', name: 'Contact', component: Contact } // Página de contato
];

// Criando o roteador
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Histórico da aplicação
    routes, // Rotas definidas acima
});

// Criando a aplicação Vue
const app = createApp(App);

// Adicionando o roteador à aplicação
app.use(router);

// Montando o app na DOM
app.mount('#app');

export default router;