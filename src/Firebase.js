// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { firebase } from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBNHyU5IEPXxeDR1BtSNjPH1ymFxbXQO6E",
//   authDomain: "clone-47c8a.firebaseapp.com",
//   projectId: "clone-47c8a",
//   storageBucket: "clone-47c8a.appspot.com",
//   messagingSenderId: "114627492210",
//   appId: "1:114627492210:web:4f905fd13e712dad8445eb",
//   measurementId: "G-JKQDNW1MZP",
// };

// const firebaseapp = initializeApp(firebaseConfig);
// var db = firebase.firestore();

// const auth = getAuth(firebaseapp);

// export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNHyU5IEPXxeDR1BtSNjPH1ymFxbXQO6E",
  authDomain: "clone-47c8a.firebaseapp.com",
  projectId: "clone-47c8a",
  storageBucket: "clone-47c8a.appspot.com",
  messagingSenderId: "114627492210",
  appId: "1:114627492210:web:4f905fd13e712dad8445eb",
  measurementId: "G-JKQDNW1MZP",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth();

export { db, auth };
