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
    <div class="receita">
        <router-link to="/">&lt; Voltar</router-link>
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