<template>
    <div class="receita">
        <router-link to="/">&lt; Voltar</router-link>
        <h1>{{ receita.titulo }}</h1>
        <p class="descricao">{{ receita.descricao }}</p>
        <hr />
        <div class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
                <li v-for="(ingrediente, i) in receita.ingredientes" :key="i"> {{ ingrediente }} </li>
            </ul>
        </div>
        <div class="preparo">
            <h3>Preparo</h3>
            <ul>
                <li v-for="(preparo, i) in receita.preparos" :key="i"> {{ preparo }} </li>
            </ul>
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