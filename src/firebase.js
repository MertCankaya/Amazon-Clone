import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBz_FOuOpy-D_3SaJxmVE7BrVIkYB5U23E",
  authDomain: "clone-ff34b.firebaseapp.com",
  projectId: "clone-ff34b",
  storageBucket: "clone-ff34b.appspot.com",
  messagingSenderId: "834929826708",
  appId: "1:834929826708:web:06b5fb7d9cfe5ad719cd81",
  measurementId: "G-ZN071JPE5R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };
