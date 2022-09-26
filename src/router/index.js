/***************************************************************************************
*  
*  ASSESSMENT
*  Instituto Infnet
*  Engenharia de Software
*
*  Frameworks Front-end e conexão com Back-end
*
*  Aluno: Nelson Kenji Idehara
*  Professora: Gioliano Barbosa Bertoni
*  Data: Setembro 2022
*
***************************************************************************************/

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TelaPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/receita/:id',
    name: 'VerReceita',
    component: () => import('../views/VerReceita.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
