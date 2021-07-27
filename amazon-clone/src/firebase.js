// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCCjHVDNT4h2aGmmzrSIdPTuNTx_J3locQ",
    authDomain: "clone-57497.firebaseapp.com",
    projectId: "clone-57497",
    storageBucket: "clone-57497.appspot.com",
    messagingSenderId: "434310647328",
    appId: "1:434310647328:web:1754b279416fa594833645",
    measurementId: "G-71CG5PWPWT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };