 // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDqAa4PoaB7vyQ9FE0WQFDe3Nli7nC1wJA",
    authDomain: "reservations-78188.firebaseapp.com",
    projectId: "reservations-78188",
    storageBucket: "reservations-78188.firebasestorage.app",
    messagingSenderId: "924388919428",
    appId: "1:924388919428:web:e888d91364fe96cf34dad1"
  };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const name = document.getElementById("name").value;
const room = document.getElementById("room").value;
const date = document.getElementById("date").value;  // In YYYY-MM-DD format
const time = document.getElementById("time").value;  // In HH:mm format

const saveData = async () => {
    try {
        // Adding a new document to the "events" collection with name, room, date, and time fields
        const docRef = await addDoc(collection(db, "reservations"), {
            name: name,
            room: room,
            date: date, 
            time: time
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

document.getElementById("submit").addEventListener("click", saveData);

