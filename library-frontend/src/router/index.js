import { createRouter, createWebHistory } from 'vue-router';
import PagLogin from '@/views/PagLogin.vue';
import AddUser from '@/views/AddUser.vue';
import DescLivro from '@/views/DescLivro.vue';
import PagCadastro from '@/views/PagCadastro.vue';
import PagInicial from '@/views/PagInicial.vue';
import ListaLivro from '@/views/ListaLivro.vue';
import PagUser from '@/views/PagUser.vue';
import AddLivro from '@/views/AddLivro.vue';
import MaisLivros from '@/views/MaisLivros.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/AddLivro',
      name: 'addlivro',
      component: AddLivro,
    },
    {
      path: '/MaisLivros',
      name:'maislivros',
      component: MaisLivros,
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
      path: '/ListaLivro',
      name: 'listalivro',
      component: ListaLivro,
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
    {
      path: '/PagUser',
      name: 'paguser',
      component: PagUser,
    },
  ]
});

export default router;