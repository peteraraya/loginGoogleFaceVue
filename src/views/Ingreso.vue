<template>
    <v-layout justify-center mt-4>
        <v-flex  xs="12" sm="8" md="6" xl="4">
            <v-card>
                 <v-card-text 
                    class="display-1 text-uppercase  white--text text-center"
                    :class="registro ? 'teal lighten-1' : 'indigo darken-4'"       
                            
                    >
                    <span v-if="!registro">Ingreso</span>
                    <span v-if="registro">Registro</span>
                 </v-card-text>
                <v-card-text>
                    <v-btn block color="error" class="mb-2" @click="google">
                        <v-icon left dark>fab fa-google </v-icon>
                        Google
                    </v-btn>
                    <v-btn block color="info" class="mb-2" @click="facebook">
                     <v-icon left dark>fab fa-facebook-f</v-icon>
                        Facebook
                    </v-btn>
                </v-card-text>

                <v-card-text>
                    <v-btn 
                        v-if="!registro"
                        block 
                        @click="registro = true"
                        > 
                        ¿No tienes cuenta? Registrate aquí
                    </v-btn>
                     <v-btn 
                        v-if="registro"
                        block 
                        @click="registro = false"
                        > 
                        ¿Ya tienes cuenta? Ingresa aquí
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
import {firebase, auth, db } from "@/firebase"

// Para detectar usuario
import {mapMutations } from "vuex"


import router from '@/router'

export default {
  data(){
      return{
          registro:false
      }
  },
  methods: {
      ...mapMutations(['nuevoUsuario']),
      facebook(){
          console.log('facebook');
          const provider = new firebase.auth.FacebookAuthProvider();

          this.ingresar(provider);
      },
      google(){
          console.log('google');
          const provider = new firebase.auth.GoogleAuthProvider();
         
         this.ingresar(provider);

      }, 
      async ingresar(provider){
             // Configuración de  idioma
          firebase.auth().languageCode = 'es';


            // Manejamos el error
              try {
                    // Se debe colocar await para devuelva la promesa
                    const result = await firebase.auth().signInWithPopup(provider)
                    // Creamos el usuario
                    const user = result.user;
                    console.log(user);


                   // Construir Usuario
                   const usuario = {
                       nombre : user.displayName,
                       email  : user.email,
                       uid    : user.uid,
                       foto   : user.photoURL
                   }
                // actualizamos este usuario cada vez que nos logemos
                this.nuevoUsuario(usuario)


                // Guardar en Firestore
                await db.collection('usuarios').doc(usuario.uid).set(
                        usuario
                ) 
                console.log('Usuario guardado en db');
                
                router.push({name:'home'})

              }catch(error){
                    console.log(error);
              }

      }
  }
}
</script>