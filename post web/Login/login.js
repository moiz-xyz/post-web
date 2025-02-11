import { app ,
    auth,
    signInWithEmailAndPassword, 
    onAuthStateChanged,
     // sendPasswordResetEmail
     GoogleAuthProvider,     
     signInWithPopup   
    }
    from "../firebase.js";

    const auth = getAuth(app);

let formFeild = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = formFeild;

let loginBtn = document.querySelector("#loginBtn");

const Login = (event) => {
    event.preventDefault();

    if (!loginEmail.value.trim() || !loginPassword.value.trim()) {
        Toastify({
            text: "Please fill in both fields.",
            duration: 3000
        }).showToast();
        return;
    }

    // Email Sign-In
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
        Toastify({
            text: "Logged in successfully",
            duration: 3000
        }).showToast();

        // Redirect or perform additional actions
        window.location.href = "../Dashboard/dashboard.html";
    })
    .catch((error) => {
        // Handle login failure
        const errorCode = error.code;
        const errorMessage = error.message;
        Toastify({
            text: `Login failed: ${errorMessage}`,
            duration: 3000
        }).showToast();
    });
};

loginBtn.addEventListener("click", Login);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // If a user is logged in, redirect them to the dashboard
        window.location.href = "../Dashboard/dashboard.html";
    }
});

// Reset Password

// const resetPassword = document.querySelector("#resetPassword");

// resetPassword.addEventListener("click", (event) => {
//     event.preventDefault();

//     const email = document.querySelector("#resetPasswordEmail").value;

//     auth.sendPasswordResetEmail(email)
//    .then(() => {
//         Toastify({
//             text: "Password reset email sent successfully",
//             duration: 3000
//         }).showToast();
//     })
//    .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         Toastify({
//             text: `Error sending password reset email: ${errorMessage}`,
//             duration: 3000
//         }).showToast();
//     });
// });





// signup with google
const provider = new GoogleAuthProvider();
auth.languageCode = "en";
document.addEventListener("DOMContentLoaded", function () {
    const googleSignUpBtn = document.getElementById("googleSignUpBtn");

    if (googleSignUpBtn) {
        googleSignUpBtn.addEventListener("click", function () {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    console.log("Google user:", user);

                    Toastify({
                        text: "Signed in with Google!",
                        duration: 3000,
                        gravity: "top",
                        backgroundColor: "green",
                    }).showToast();

                    // ✅ Redirect user to dashboard
                    setTimeout(() => {
                        window.location.href = "../Dashboard/dashboard.html";
                    }, 2000);
                })
                .catch((error) => {
                    console.error("Error:", error.code, error.message);
                    Toastify({
                        text: `Google Sign-in Failed: ${error.message}`,
                        duration: 3000,
                        gravity: "top",
                        backgroundColor: "red",
                    }).showToast();
                });
        });
    } else {
        console.error("Google Sign-Up button not found!");
    }
});

