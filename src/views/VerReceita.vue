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
    <router-link to="/">&lt; Voltar</router-link>
    <div class="receita">
        <h1>{{ receita.titulo }} | {{ receita.tipo }}</h1>
        <p class="descricao">{{ receita.descricao }}</p>
        <hr />
        <div class="preparo">
            <h3>Preparo</h3>
            <p class="preparo">{{ receita.preparo }}</p>
        </div>
        <hr />
        <p>Criado em {{ format_date(receita.data) }}</p>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        computed: {
            receita () {
                return this.$store.state.receitas.find(receita => receita.id === this.$route.params.id)
            }
        },
        methods: {
          // Formata data utilizando 'Moment.js'
          format_date(value) {
            let d = new Date(value);
            return moment(String(d)).format('DD/MM/YYYY');
          },
        },        
    }
</script>

<style scoped>

.receita {
  padding: 1rem;
  border-radius: 10px;
  margin: 2rem;
  background-color: powderblue;
}

</style>