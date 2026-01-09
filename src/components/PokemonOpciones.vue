<template>
<div class="opciones-contaier">
<ul>
    <li v-on:click="pasarPadre(pokemon.id)" 
    v-for="pokemon in listaPokemons" 
    :key="pokemon.id">{{ pokemon.nombre }}</li>
</ul>
</div>
  
</template>

<script>
    //https://pokeapi.co/api/v2/pokemon/1
export default {
    props:{
        listaPokemons:{
            type:Array,
            required:true
        }
    },
    methods:{
        pasarPadre(id){
            console.log(id);
            this.$emit('seleccionado',id);
        }
    }
}
</script>

<style>
    ul{
    list-style-type: none;
    }
    li{
        background-color: #dbd9d9;
        border-radius: 5px;
        border: 1px solid black;
        cursor: pointer;
        width: 150px;
        height: 20px;
        text-align: center;
        color: rgb(248, 153, 37);
        margin-top: 10px;
        
    }
    .opciones-contaier{
        display: flex;
        justify-content: center;
    }
</style>