<template>
  <h2>
    hola mundo
  </h2>
  <h1>Consultando los datos del estudiante</h1>
  <h3>{{ idEstudiante }}</h3>
  <button @click="presentarId()">PresentarId</button>
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null
    }
  },
  created() {
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);
    console.log(this.$route.params.id);
    //this.idEstudiante = this.$route.params.id;
  },
  methods: {
    presentarId() {
      this.idEstudiante = this.$route.params.id;
    }
  }
}
</script>

<style>

</style>