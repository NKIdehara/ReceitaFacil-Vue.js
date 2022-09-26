<!-- 
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
-->

<template>
  <div class="home">
    <h1>Receita Fácil</h1>
    <button @click="togglePopup">Nova Receita</button>

    <div class="card" v-for="receita in $store.state.receitas" :key="receita.id">
      <h2>{{ receita.titulo }}</h2>
      <p>{{ receita.descricao }}</p>
      <router-link :to="`/receita/${receita.id}`">
        <button>Ver Receita</button>
      </router-link>
      <button @click="apagarReceita(receita)">Apagar</button>

    </div>

    <div class="receitas"></div>

    <div class="adicionar-receita" v-if="popupOpen">
      <div class="popup-nova-receita">
        <h2>Adicionar Nova Receita</h2>

        <form @submit.prevent="adicionarReceita">
          <div class="grupo">
            <label>Nome da Receita</label>
            <input type="text" v-model="novaReceita.titulo" />
          </div>

          <div class="grupo">
            <label>Descrição da Receita</label>
            <textarea v-model="novaReceita.descricao"></textarea>
          </div>

          <div class="grupo">
            <label>Preparo</label>
            <textarea v-model="novaReceita.preparo"></textarea>
          </div>

          <button type="submit">Adicionar Receita</button>
          <button type="button" @click="togglePopup">Fechar</button>

        </form>
      </div>
    </div>

  </div>
</template>

<script>
import {ref} from 'vue';
import {useStore} from 'vuex';

export default {
  name: 'TelaPrincipal',
  setup() {
    const novaReceita = ref({
      titulo: '',
      descricao: '',
      preparo: '',
    });

    const popupOpen = ref(false);
    const store = useStore();

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    }

    const adicionarReceita = () => {
      novaReceita.value.id = novaReceita.value.titulo.toLowerCase().replace(/\s/g, '-');

      if (novaReceita.value.id == '') {
        alert ("Título da receita inválido!");
        return;
      }

      store.commit('NOVA_RECEITA', { ...novaReceita.value });

      novaReceita.value = {
        titulo: '',
        descricao: '',
        preparo: '',
      };

      togglePopup();
    }

    const apagarReceita = (receita) => {
      store.commit('APAGAR_RECEITA', { ...receita });
    }

    return {
      novaReceita, 
      togglePopup,
      popupOpen,
      adicionarReceita,
      apagarReceita
    }
  },
}
</script>
