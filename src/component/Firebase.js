import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

 var firebaseConfig = {
     apiKey: "AIzaSyC4E_E4j8N7irUSbSJ6ZXaQ5HPRBS3U7Dw",
     authDomain: "senior-project-5103d.firebaseapp.com",
     projectId: "senior-project-5103d",
     storageBucket: "senior-project-5103d.appspot.com",
     messagingSenderId: "65169065777",
     appId: "1:65169065777:web:bed6edfad4b4def22c1210",
     measurementId: "G-19VHG0V7TD"
   };
   // Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);


export default Firebase;