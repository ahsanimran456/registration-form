import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqw9EW1XKnQ1wfUwJXKv28s_P-w3mEmE8",
  authDomain: "registration-form-157b2.firebaseapp.com",
  projectId: "registration-form-157b2",
  storageBucket: "registration-form-157b2.appspot.com",
  messagingSenderId: "533930597385",
  appId: "1:533930597385:web:10e77497422161987cecd8",
  measurementId: "G-GG8F97L2FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const register=()=>{
  const fullname = document.getElementById("fullname").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("Password").value;
  // console.log(fullname)
  // console.log(number)
  // console.log(email)
  // console.log(password)
  createUserWithEmailAndPassword(auth,email,password,number,fullname)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console("resgister...",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("eror msg...",errorMessage);
    // ..
  });
}
const reg = document.getElementById("register")
reg.addEventListener("click",register)
