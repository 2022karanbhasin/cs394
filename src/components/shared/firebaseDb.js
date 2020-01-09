import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDWgcXoklaphdspYZB4UYdy3NKvZKOdLuE",
    authDomain: "cs394hw1.firebaseapp.com",
    databaseURL: "https://cs394hw1.firebaseio.com",
    projectId: "cs394hw1",
    storageBucket: "cs394hw1.appspot.com",
    messagingSenderId: "754382513047",
    appId: "1:754382513047:web:193e8b9f59f9ddea111ad2",
    measurementId: "G-T8SL7B5ZNZ"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;