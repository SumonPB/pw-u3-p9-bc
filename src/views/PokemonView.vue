<!--Nuevo componente PokemonView-->
<template>
  <div class="card">
  <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador"/>
  <!--@seleccionado="evaluarGanador($event) emit y el $event funciona para enviar el id desde el hijo-->
  <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr" />

  <button @click="destuir()">Destruir</button>
  </div>
  <div class="mensaje">
  <h1 v-if="gano">
    Pokemon Seleccionado Ganador
  </h1>
    <h1 v-if="perdio">
    Pokemon Seleccionado Perdedor
  </h1>
  </div>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import {ObtenerVectorPokemonsFachada,obtenerAleatorioFachada} from "../clients/PokemonClient.js";

export default {
components: {
  PokemonImagen,
  PokemonOpciones
 },data(){
    return{
      pokemonArr:[],
      pokemonGanador:null,
      gano:false,
      perdio:false,
      mostrar:true
    }
  },
  //***************************************** */
  //Creacion del ciclo de vida del componente
  //Cuando se crea el componente se llama a la funcion iniciarJuego existen dos fases antes de crear y creado
  beforeCreate(){
    console.log("beforeCreate: Componente a punto de crearse") 
  },
  created(){
    console.log("Componente  ya creado cuando se resolvio/ejecuto el data,compuded,methods,watchers")
  },
  //*********************************************************** */
  //Montaje del componente: cuando se visualiza el componente
  beforeMount(){
    console.log("beforeMount: justo antes de mostrar el primer render de un elemento HTML")
  },
   mounted(){
    console.log("Componente montado: el componente ya se renderizo")
    this.iniciarJuego();
  },
  //********************************************************** */
  //actualizacion del componente: cuando hay cambios en el DOM
  beforeUpdate(){
    console.log("beforeUpdate: cuando cambio un data o un props y vue esta por re-renderizar el DOM")
  },
   updated(){
    console.log("updata: cuando ya se actualizado despues de la re-renderizacion del DOM")
  },
  //********************************************************** */
  //Desmontaje del componente: cuando se elimina el componente del DOM
  beforeUnmount(){
    console.log("beforeUnmount: justo antes de que el componente se destruya")
  },
   unmounted(){
    console.log("unmounted: el componente ya fue eliminado del DOM y se destuye")
  },
  //********************************************************** */
  methods:{
   async iniciarJuego(){
          this.pokemonArr = await ObtenerVectorPokemonsFachada();
          const idAleatorio = obtenerAleatorioFachada(0,3);
          this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
    evaluarGanador(id){
      console.log("valor recibido desde padre",id)
      if(this.pokemonGanador===id){
       /* setTimeout(()=>{
          this.gano=false
           //this.iniciarJuego();
        },1000)*/
        this.gano=true
      }else{
          /*setTimeout(()=>{
          this.perdio=false
          //this.iniciarJuego();
        },1000)*/
        this.perdio=true
      }
    },
    destuir(){
      this.mostrar=false;
    }
  }

}
</script>

<style>
.card{
  display: flex;
  align-content: center;
  flex-direction: column;
  padding-top: 40px;
    width: 400px;
    height: 400px;
    border: 2px solid rgb(230, 223, 126);
    border-radius: 10px;
    margin: auto;
    margin-top: 50px;
    box-shadow: 5px 5px 15px rgba(236, 238, 118, 0.6);
    background-color: #ffdada;
}
.mensaje{
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: column;
  padding-top: 10px;
    width: 400px;
    height: 100px;
    border-radius: 10px;
    margin: auto;
    margin-top: 15px;
    background-color: #ffdada;
}
</style>