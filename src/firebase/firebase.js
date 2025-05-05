import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCA8UhARx4ZjhEVfhycxlUSnof8EalvvY",
  authDomain: "assaignment-9-87244.firebaseapp.com",
  projectId: "assaignment-9-87244",
  storageBucket: "assaignment-9-87244.firebasestorage.app",
  messagingSenderId: "286376198439",
  appId: "1:286376198439:web:9c74a326de4190cee5e902",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
