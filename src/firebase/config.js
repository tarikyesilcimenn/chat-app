import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAp7V6GiVbAKc9DHufuyhdVR6-f5dMkLBg",
    authDomain: "chat-app-e6260.firebaseapp.com",
    projectId: "chat-app-e6260",
    storageBucket: "chat-app-e6260.appspot.com",
    messagingSenderId: "384044955374",
    appId: "1:384044955374:web:67af1e850336cf430ea5ff",
    measurementId: "G-TTHMEJL3ZT"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const date = firebase.firestore.FieldValue.serverTimeStamp;
const auth = firebase.auth();

export {db, date, auth}