import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDr0lm6biVEWBnPYQvhy5oGG_MLaCbuDE0",
    authDomain: "resume-898a2.firebaseapp.com",
    databaseURL: "https://resume-898a2.firebaseio.com",
    projectId: "resume-898a2",
    storageBucket: "resume-898a2.appspot.com",
    messagingSenderId: "253055347294",
    appId: "1:253055347294:web:cd9089a14a220c967522cf",
    measurementId: "G-YS68QTD854"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;

