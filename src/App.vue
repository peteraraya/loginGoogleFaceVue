<template>
<v-app >
  <v-card
    color="ehite lighten-4"
    flat
    height="400px"
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{name:'home'}">

           <span> Vue</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion" class="error">
        <span class="mr-2 ">Cerrar sessión</span>
          <v-icon> fas fa-address-book</v-icon>
      </v-btn>

    </v-toolbar>
      <v-content>
      <v-container>
          <router-view/>
        </v-container>
    </v-content>
  </v-card>
  </v-app>
</template>


<script>
import { mapActions } from 'vuex'

export default {
name:'App',
data(){
  return{

  }
},
methods:{
  ...mapActions(['cerrarSesion'])
}
};
</script>
