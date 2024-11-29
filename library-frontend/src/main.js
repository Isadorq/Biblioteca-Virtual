import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);  // Definir a variável app aqui
app.use(router);  // Usar o router
app.mount('#app');  // Montar o app

createApp(App)
.use(router)
.mount('#app');