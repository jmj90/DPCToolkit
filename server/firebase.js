import firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyA_oagmg0mZDgsDbcNlGkZ8drQhKIJ3n-c",
  authDomain: "sollys-way.firebaseapp.com",
  databaseURL: "https://sollys-way.firebaseio.com",
  projectId: "sollys-way",
  storageBucket: "sollys-way.appspot.com",
};


firebase.initializeApp(config);

export default firebase
