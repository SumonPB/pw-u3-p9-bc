<template>
  <div class="container">
    <div class="image">
      <img
      v-if="imagen"
        :src="imagen"
        alt="Error"
      />
    </div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con el signo de interrogacion tus preguntas(?)abasd</p>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import {consumirAPIFacade} from '../clients/YesNoClient.js'
export default {
    data(){
      return{
        pregunta: null,
        respuesta: null,
        imagen:null
      }
    },
   watch: {
       pregunta(value,oldValue){
        if(!value.includes('?')) return;
        this.consumir();
      }
    },
    methods:{
      async consumir(){
        console.log("Respuesta")
        const response = await consumirAPIFacade();
        console.log(response)
        console.log(response.answer)
          this.respuesta = "Pensando...."
        this.respuesta = response.answer;
        this.imagen = response.image;
      }
    }
};
</script>

<style scoped>
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
.pregunta-container {
  position: relative;
  
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  min-height: 100vh; /* altura de toda la pantalla */
  display: flex;
  flex-direction: column; /* elementos uno debajo del otro */
  justify-content: center; /* centrado vertical */
  align-items: center; /* centrado horizontal */
  text-align: center;
}
input{
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus{
    outline: none;
}
h1,h2,h3{
    color: rgb(223, 223, 223) ;
}
p{
    margin-top: 50px;
    font-size: 20px;
     color: rgb(255, 255, 255) ;
}
h2{
    margin-top: 150px;
}
body{
  background-color: rgb(131, 129, 129);
}
</style>