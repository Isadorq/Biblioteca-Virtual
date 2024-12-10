import { createRouter, createWebHistory } from 'vue-router';
import PagLogin from '@/views/PagLogin.vue';
import AddUser from '@/views/AddUser.vue';
import DescLivro from '@/views/DescLivro.vue';
import PagCadastro from '@/views/PagCadastro.vue';
import PagInicial from '@/views/PagInicial.vue';
import PagInicio from '@/views/PagInicio.vue';
import AddLivro from '@/views/AddLivro.vue';

const routes = [
  {
    path: '/',  
    name: 'inicio',
    component: PagInicio, 
  },
  {
    path: '/PagLogin',
    name: 'login',
    component: PagLogin,
  },
  {
    path: '/PagCadastro',
    name: 'cadastro',
    component: PagCadastro,
  },
  {
    path: '/PagInicial',
    name: 'inicial',
    component: PagInicial,
  },
  {
    path: '/AddLivro',
    name: 'addlivro',
    component: AddLivro,
  },
  {
    path: '/AddUser',
    name: 'adduser',
    component: AddUser,
  },
  {
    path: '/DescLivro',
    name: 'desclivro',
    component: DescLivro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;