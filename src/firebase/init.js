// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfB5d0xQHvz9ndgrBQyxKyFseWG_BGrb4",
  authDomain: "juve-vue-app.firebaseapp.com",
  projectId: "juve-vue-app",
  storageBucket: "juve-vue-app.appspot.com",
  messagingSenderId: "891345036424",
  appId: "1:891345036424:web:6684c2a0b6ece27dcf2b3d",
};

const app = initializeApp(firebaseConfig);

const db = firebase.database(app);

db.ref("teams").once("value", (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

// export default db;
