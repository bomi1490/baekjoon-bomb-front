import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4Ikxgy3-mMeLOfKe1m4wWj1kP2lQkzJ4",
    authDomain: "baekjoonbomb.firebaseapp.com",
    projectId: "baekjoonbomb",
    storageBucket: "baekjoonbomb.appspot.com",
    messagingSenderId: "425144609011",
    appId: "1:425144609011:web:7110d34fc8818f47736f86",
    measurementId: "G-35B3KL63VX"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);