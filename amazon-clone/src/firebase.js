import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaifFbGmA1B03rbU7JzNac4Jr0JERXrwo",
  authDomain: "clone-fccd0.firebaseapp.com",
  projectId: "clone-fccd0",
  storageBucket: "clone-fccd0.appspot.com",
  messagingSenderId: "101215754132",
  appId: "1:101215754132:web:7c6d288866bbc7d50aa181",
  measurementId: "G-FB8YK5Y8VK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};