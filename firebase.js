import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDqAa4PoaB7vyQ9FE0WQFDe3Nli7nC1wJA",
    authDomain: "reservations-78188.firebaseapp.com",
    projectId: "reservations-78188",
    storageBucket: "reservations-78188.firebasestorage.app",
    messagingSenderId: "924388919428",
    appId: "1:924388919428:web:e888d91364fe96cf34dad1"
  };

//// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





