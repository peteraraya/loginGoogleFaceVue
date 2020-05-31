const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYH1Ku7tvQVOm1UDnXtSC5R2FbdLbmFoE",
    authDomain: "facey-fb029.firebaseapp.com",
    databaseURL: "https://facey-fb029.firebaseio.com",
    projectId: "facey-fb029",
    storageBucket: "facey-fb029.appspot.com",
    messagingSenderId: "686893079721",
    appId: "1:686893079721:web:58f206f42483d8f10e1db8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage =  firebase.storage();


export {firebase, db, auth, storage} 