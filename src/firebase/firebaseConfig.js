import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGXEVJsQ2cF1WFrNEB9D07ho5m64E0jEc",
  authDomain: "facebook-demo-15cde.firebaseapp.com",
  projectId: "facebook-demo-15cde",
  storageBucket: "facebook-demo-15cde.appspot.com",
  messagingSenderId: "1086257274989",
  appId: "1:1086257274989:web:0ba04ee4817f969e655f64",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
