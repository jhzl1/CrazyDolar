import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgPj8paJTuDbf7wxJaWMJPnlzcZqhnksc",
  authDomain: "crazydolar.firebaseapp.com",
  projectId: "crazydolar",
  storageBucket: "crazydolar.appspot.com",
  messagingSenderId: "879593713471",
  appId: "1:879593713471:web:86a77a71ece2ecd95cad8a",
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
