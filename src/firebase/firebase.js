// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfB5d0xQHvz9ndgrBQyxKyFseWG_BGrb4",
  authDomain: "juve-vue-app.firebaseapp.com",
  databaseURL: "https://juve-vue-app-default-rtdb.firebaseio.com/",
  projectId: "juve-vue-app",
  storageBucket: "juve-vue-app.appspot.com",
  messagingSenderId: "891345036424",
  appId: "1:891345036424:web:6684c2a0b6ece27dcf2b3d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getDatabase(app);
// const firebaseMatches = ref(db, "matches");
const firebasePlayers = ref(db, "players");
// const firebasePromotions = ref(db, "promotions");

export { db, auth, firebasePlayers };
