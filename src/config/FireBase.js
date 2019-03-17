import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDPAfjX4qeXlC22-z0cwQ1wtRjX3fturQM",
    authDomain: "test-firestore-7795e.firebaseapp.com",
    databaseURL: "https://test-firestore-7795e.firebaseio.com",
    projectId: "test-firestore-7795e",
    storageBucket: "test-firestore-7795e.appspot.com",
    messagingSenderId: "685929721530"
};


export let fb = firebase.initializeApp(config);
export let db = firebase.firestore();
export let ts = firebase.firestore.FieldValue.serverTimestamp();

