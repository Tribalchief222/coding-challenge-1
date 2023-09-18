import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhly8NjX-0u3VGOZAcNH8sFsQVUCsbpnc",
  authDomain: "coding-challnege-1.firebaseapp.com",
  projectId: "coding-challnege-1",
  storageBucket: "coding-challnege-1.appspot.com",
  messagingSenderId: "170222885260",
  appId: "1:170222885260:web:9e51f19150d0759ca15ea9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
