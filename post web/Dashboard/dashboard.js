import { auth, signOut, onAuthStateChanged } from "../firebase.js"; 

let logoutBtn = document.getElementById('logoutBtn');

// Logout functionality


const logout = () => {
    signOut(auth).then(() => {
        Toastify({
            text: "Logout successfully completed",
            duration: 3000
        }).showToast();

        window.location.href = "../Login/index.html";
    }).catch((error) => {
        Toastify({
            text: "Logout Failed: " + error.message,
            duration: 3000
        }).showToast();
    });
};

logoutBtn.addEventListener('click', logout);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../Login/index.html"; 
    }
});


import { auth, db } from "../firebase.js";

import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
  Timestamp,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
