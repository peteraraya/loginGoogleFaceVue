import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'


import {auth } from "@/firebase"

Vue.config.productionTip = false
// Pegamos de la documentación de firebase
auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    store.dispatch('setUsuario', user);
  }
  // Detectamos el usuario - antes que se inicialize Vue
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

});



