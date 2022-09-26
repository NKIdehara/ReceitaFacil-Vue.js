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
            <label>Ingredientes</label>
            <div class="ingredientes" v-for="i in novaReceita.indiceIngrediente" :key="i">
              <input type="text" v-model="novaReceita.ingredientes[i-1]" />
            </div>
            <button type="button" @click="adicionarIngrediente">Incluir ingrediente</button>
          </div>

          <div class="grupo">
            <label>Preparo</label>
            <div class="preparo" v-for="i in novaReceita.indicePreparo" :key="i">
              <input type="text" v-model="novaReceita.preparos[i-1]">
            </div>
            <button type="button" @click="adicionarPreparo">Incluir passo</button>
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
      ingredientes: [],
      preparos: [],
      indiceIngrediente: 1,
      indicePreparo: 1
    });

    const popupOpen = ref(false);
    const store = useStore();

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    }

    const adicionarIngrediente = () => {
      novaReceita.value.indiceIngrediente++;
    }

    const adicionarPreparo = () => {
      novaReceita.value.indicePreparo++;
    }

    const adicionarReceita  = () => {
      novaReceita.value.id = novaReceita.value.titulo.toLowerCase().replace(/\s/g, '-');

      if (novaReceita.value.id == '') {
        alert ("Título da receita inválido!");
        return;
      }

      store.commit('NOVA_RECEITA', { ...novaReceita.value });

      novaReceita.value = {
        titulo: '',
        descricao: '',
        ingredientes: [],
        preparos: [],
        indiceIngrediente: 1,
        indicePreparo: 1
      };

      togglePopup();
    }

    return {
      novaReceita, 
      togglePopup,
      popupOpen,
      adicionarIngrediente,
      adicionarPreparo,
      adicionarReceita
    }

  }
}
</script>
