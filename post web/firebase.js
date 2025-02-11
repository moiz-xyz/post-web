// import { initializeApp } from "https://www.gstatic.com/firebasejs/latest/firebase-app.js";
// import { 
//   getAuth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   onAuthStateChanged, 
//   signOut, 
//   // sendPasswordResetEmail, 
//   GoogleAuthProvider,     
//   signInWithPopup     ,
// } from "https://www.gstatic.com/firebasejs/latest/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBQ1vpxNtStGxf6vllhApngmUc_wOOi4rw",
//   authDomain: "post-web-117d8.firebaseapp.com",
//   projectId: "post-web-117d8",
//   storageBucket: "post-web-117d8.firebasestorage.app",
//   messagingSenderId: "339707830",
//   appId: "1:339707830:web:6fbd5046d77d0474466317",
//   measurementId: "G-HL3HWZFMR6"
// };




// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); 
// auth.languageCode = 'en';
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);


// // ✅ Export Firebase functions
// export { 
//   app, 
//   auth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   onAuthStateChanged, 
//   signOut, 
//   // sendPasswordResetEmail,
//   GoogleAuthProvider, 
//   signInWithPopup 
// };

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,
    createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  // sendPasswordResetEmail, 
  GoogleAuthProvider,     
  signInWithPopup     ,
 } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBQ1vpxNtStGxf6vllhApngmUc_wOOi4rw",
    authDomain: "post-web-117d8.firebaseapp.com",
    projectId: "post-web-117d8",
    storageBucket: "post-web-117d8.appspot.com", 
    messagingSenderId: "339707830",
    appId: "1:339707830:web:6fbd5046d77d0474466317",
    measurementId: "G-HL3HWZFMR6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { app, auth , 
    createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  // sendPasswordResetEmail, 
  GoogleAuthProvider,     
  signInWithPopup     ,
 };

