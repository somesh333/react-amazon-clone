
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPhM5m7JuOELOVymfyisnhSJ_UCFDfItI",
    authDomain: "react--clone-395a3.firebaseapp.com",
    databaseURL: "https://react--clone-395a3.firebaseio.com",
    projectId: "react--clone-395a3",
    storageBucket: "react--clone-395a3.appspot.com",
    messagingSenderId: "916938904801",
    appId: "1:916938904801:web:0b9b439795889b2d7213a0",
    measurementId: "G-VQRHWFHMDL"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth } ;