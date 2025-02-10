
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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const saveData = async () => {
    try {
        const name = document.getElementById("name").value;
        const room = document.getElementById("room").value;
        const date = document.getElementById("date").value;  // In YYYY-MM-DD format
        const time = document.getElementById("time").value;  // In HH:mm format
        // Adding a new document to the "events" collection with name, room, date, and time fields
        const docRef = await db.collection("reservations").add({
            name: name,
            room: room,
            date: date, 
            time: time
        });

        if (!name || !room || !date || !time) {
            alert("Please fill in all fields!");
            return;
        }

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

document.getElementById("submit").addEventListener("click", saveData);

