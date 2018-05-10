import { firebase } from "@firebase/app";
import "@firebase/firestore";

//UPDATE WITH YOUR CONFIG

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4_O8OoTSM8adZMudBPvvvD--Ahy8vE2E",
  authDomain: "vuefirestoretodo.firebaseapp.com",
  databaseURL: "https://vuefirestoretodo.firebaseio.com",
  projectId: "vuefirestoretodo",
  storageBucket: "",
  messagingSenderId: "101368307451"
});

export const db = firebaseApp.firestore();
