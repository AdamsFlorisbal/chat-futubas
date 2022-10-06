import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDOgHekPOSnSZqI1St39soE5E5rgRtBY7Y",
    authDomain: "chat-futubas.firebaseapp.com",
    projectId: "chat-futubas",
    storageBucket: "chat-futubas.appspot.com",
    messagingSenderId: "335980720896",
    appId: "1:335980720896:web:2f899fba39f6a1f877f9e5"
  };


  const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };