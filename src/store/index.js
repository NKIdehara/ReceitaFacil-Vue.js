import { createStore } from 'vuex'

export default createStore({
  state: {
    receitas: [
      {
        id: 'arroz',
        titulo: 'Arroz',
        descricao: 'Arroz branco',
        ingredientes: [
          '300g de arroz',
          'sal a gosto'
        ],
        preparos: [
          'Lavar o arroz.',
          'Colocar sal.',
          'Cozinhar por 30 minutos.'
        ]
      },
      {
        id: 'carne',
        titulo: 'Carne',
        descricao: 'Carne grelhada',
        ingredientes: [
          '1 bife',
          'tempero a gosto'
        ],
        preparos: [
          'Temperar a carne.',
          'Assar até dourar.'
        ]
      },
      {
        id: 'macarrao',
        titulo: 'Macarrão',
        descricao: 'Macarrão com molho',
        ingredientes: [
          '500g de macarrão',
          '1 lata de molho de tomate'
        ],
        preparos: [
          'Cozinhar o macarrão.',
          'Escorrer e colocar o molho.'
        ]
      }
    ]
  },
  mutations: {
    NOVA_RECEITA(state, receita){
      state.receitas.push(receita)
    }
  }
})
