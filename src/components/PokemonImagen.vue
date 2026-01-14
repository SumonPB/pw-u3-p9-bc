<template><!---->
<div class="pokemon-container">
<img :src="srcImagen" alt="">
</div>
 
</template>

<script>
export default {
props:{
    pokemonId:{
        type:Number,
        required:true
    }
},
computed:{
    srcImagen(){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
},
  //Desmontaje del componente: cuando se elimina el componente del DOM
  beforeUnmount(){
    console.log("beforeUnmount: justo antes de que el componente se destruya a")
  },
   unmounted(){
    console.log("unmounted: el componente ya fue eliminado del DOM y se destuye")
  },
  //********************************************************** */
}
</script>

<style>
    img {
    width: 200px;
    height: 200px;
    }
    .pokemon-container {
        display: flex;
        margin-left: 8%;
        justify-content: center;
        padding-top: 20px;
        background-color: rgb(158, 235, 209);
        box-shadow: 5px 5px 15px rgba(253, 117, 108, 0.6);
        height: 200px;
        width: 300px;
        padding: 15px;
    }
</style>