<template>
  <v-layout>
    <h3>Bienvenido {{usuario.nombre}} </h3>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import  {mapState } from 'vuex';

export default {
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
