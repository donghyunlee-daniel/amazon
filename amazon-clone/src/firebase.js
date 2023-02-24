import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhaTqGwlt15ofAJJA9JliGCtOmoNQ5-q8",
  authDomain: "fir-26e8e.firebaseapp.com",
  projectId: "fir-26e8e",
  storageBucket: "fir-26e8e.appspot.com",
  messagingSenderId: "944641240207",
  appId: "1:944641240207:web:e3ed43597f29950aff14fa",
  measurementId: "G-H5NSLXZHLT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};