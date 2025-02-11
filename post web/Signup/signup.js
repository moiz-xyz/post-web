import { auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged , 
} from "../firebase.js";

let signUpBtn = document.getElementById("signUpBtn");



const signup = (event) => {
    event.preventDefault(); // ✅ Prevent page reload

    let userName = document.getElementById("signup-name").value.trim();
    let userEmail = document.getElementById("signup-email").value.trim();
    let userPassword = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // ✅ Validate Inputs
    if (!userName || !userEmail || !userPassword || !confirmPassword) {
        Toastify({

            text: "All fields are required!",
            
            duration: 3000
            
            }).showToast();
        return;
    }

    if (userPassword.length < 6) {
        // alert("Password must be at least 6 characters long!");
        Toastify({

            text: "Password must be at least 6 characters long!",
            
            duration: 3000
            
            }).showToast();
        return;
    }

    if (userPassword !== confirmPassword) {
        // alert("Passwords do not match!");
        Toastify({

            text: "Passwords do not match!",
            
            duration: 3000
            
            }).showToast();
        return;
    }
}
// Firebase Signup
createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
        console.log("User  created successfully:", userCredential.user); 
        Toastify({
            text: "Account created successfully!",
            duration: 3000
        }).showToast();

        // Redirect to login page after signup
        setTimeout(() => {
            window.location.href = "../login/index.html";
        }, 2000);
    })
    .catch((error) => {
        console.error("Error:", error.code, error.message);
        alert("Error: " + error.message);
    });

signUpBtn.addEventListener("click", signup);

// Firebase Authentication State Change

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user.email);
        window.location.href = "../Login/index.html";
    } else {
        console.log("User is signed out");
    }
});
