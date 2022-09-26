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

import { createStore } from 'vuex'

export default createStore({
  state: {
    receitas: [
      {
        id: 'arroz',
        titulo: 'Arroz',
        descricao: 'Arroz branco',
        preparo: 'Lavar o arroz; Colocar sal e cozinhar por 30 minutos.'
      },
      {
        id: 'carne',
        titulo: 'Carne',
        descricao: 'Carne grelhada',
        preparo: 'Temperar a carne; Assar até dourar.'
      },
      {
        id: 'macarrao',
        titulo: 'Macarrão',
        descricao: 'Macarrão com molho',
        preparo: 'Cozinhar o macarrão; Escorrer e colocar o molho.'
      }
    ]
  },
  mutations: {
    NOVA_RECEITA(state, receita){
      state.receitas.push(receita)
    },

    APAGAR_RECEITA(state, receita){
      let receitas = state.receitas.filter(r => r.id != receita.id);
      state.receitas = receitas;
    }
  }
})
