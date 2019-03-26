import firebase from 'firebase';
import database from  'firebase/database'
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pooeybuttsdatabase.firebaseapp.com",
  databaseURL: "https://pooeybuttsdatabase.firebaseio.com",
  projectId: "pooeybuttsdatabase",
  storageBucket: "pooeybuttsdatabase.appspot.com",
  messagingSenderId: "145106926943"
};

firebase.initializeApp(config);
// let database = firebase.database();

export default firebase
