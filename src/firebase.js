
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbR-sLW_NwI1HkstAIYJYtklmjC6syLgA",
    authDomain: "netflix-new-b722d.firebaseapp.com",
    projectId: "netflix-new-b722d",
    storageBucket: "netflix-new-b722d.appspot.com",
    messagingSenderId: "358518818111",
    appId: "1:358518818111:web:d33ff5dfc958c9b124ff8a",
    measurementId: "G-0W6NCWWKTQ"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;  