import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBYFhx1TnJ2eZnPMDHkdcrJksvW_O0VKjc",
  authDomain: "diary-6201e.firebaseapp.com",
  projectId: "diary-6201e",
  storageBucket: "diary-6201e.appspot.com",
  messagingSenderId: "1013640810812",
  appId: "1:1013640810812:web:c7aa7402286c3b2d9b0e39",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
