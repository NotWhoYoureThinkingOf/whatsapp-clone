import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJJAw0BXbMlyzYmtz3fFyGvSODCpjh92I",
  authDomain: "whatsapp-clone-c2061.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c2061.firebaseio.com",
  projectId: "whatsapp-clone-c2061",
  storageBucket: "whatsapp-clone-c2061.appspot.com",
  messagingSenderId: "859837684968",
  appId: "1:859837684968:web:05bd83377259f751c0fd5d",
  measurementId: "G-RJMXPHM6T6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;