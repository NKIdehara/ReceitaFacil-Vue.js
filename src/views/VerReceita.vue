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
        <h1>{{ receita.titulo }}</h1>
        <p class="descricao">{{ receita.descricao }}</p>
        <hr />
        <div class="preparo">
            <h3>Preparo</h3>
            <p class="preparo">{{ receita.preparo }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            receita () {
                return this.$store.state.receitas.find(receita => receita.id === this.$route.params.id)
            }
        }

    }
</script>