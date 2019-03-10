import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyA8sNaxAh_UbaGcOwWx0u1Jshw1DoEZ5QQ",
    authDomain: "emoji-app-26f79.firebaseapp.com",
    databaseURL: "https://emoji-app-26f79.firebaseio.com",
    projectId: "emoji-app-26f79",
    storageBucket: "",
    messagingSenderId: "771541069625"
};


export let fb = firebase.initializeApp(config);
export let db = firebase.firestore();
export let ts = firebase.firestore.FieldValue.serverTimestamp();

