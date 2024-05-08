<script src=
"https://www.gstatic.com/firebasejs/3.7.4/firebase.js">
	</script>
	
	
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyAloK2-BQ8sQqJouHE6_l5wIVjLdfb6IpM",
  authDomain: "business-efd3b.firebaseapp.com",
  projectId: "business-efd3b",
  storageBucket: "business-efd3b.appspot.com",
  messagingSenderId: "142252039892",
  appId: "1:142252039892:web:d7ec35b241aebe45822541",
  measurementId: "G-Z2SD4WHPMM"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
 
 let messagesRef = firebase.database()
     .ref('Collected Data');
  
 document.getElementById('contactForm')
     .addEventListener('submit', submitForm);

 function submitForm(e) {
     e.preventDefault();

     // Get values
     let name = getInputVal('name');
     let email = getInputVal('email');

     saveMessage(name, email);
     document.getElementById('contactForm').reset();
 }

 // Function to get form values
 function getInputVal(id) {
     return document.getElementById(id).value;
 }

 // Save message to firebase
 function saveMessage(name, email) {
     let newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         email: email,
     });
 }
