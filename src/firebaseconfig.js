import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAAz8DS8pZEVYKFSh1CAWP_xTC4eN4mhUw",
    authDomain: "reactfirebase-33345.firebaseapp.com",
    projectId: "reactfirebase-33345",
    storageBucket: "reactfirebase-33345.appspot.com",
    messagingSenderId: "155057221640",
    appId: "1:155057221640:web:fbc5fc47390a255d1f61bd",
    measurementId: "G-JT28GW8M78"
  };

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
