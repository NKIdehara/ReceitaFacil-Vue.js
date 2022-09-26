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

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
