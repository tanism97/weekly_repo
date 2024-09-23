import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOMTl8s58Q0vu3YbcohYIZODdQ56FCt0w",
  authDomain: "week7-boyu.firebaseapp.com",
  projectId: "week7-boyu",
  storageBucket: "week7-boyu.appspot.com",
  messagingSenderId: "407297888688",
  appId: "1:407297888688:web:223bfec9de717727448675"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db

