
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
        if (!name || !room || !date || !time) {
            alert("Please fill in all fields!");
            return;
        }
        const docRef = await db.collection("reservations").add({
            name: name,
            room: room,
            date: date, 
            time: time
        });

       
        document.getElementById("name").value = "";
        document.getElementById("room").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        
        showCustomAlert("You made a reservation!");
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = message;
    alertBox.style.display = "block"; // Show the modal
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none"; // Hide the modal
}



document.getElementById("ok").addEventListener("click", closeAlert);
document.getElementById("submit").addEventListener("click", saveData);

