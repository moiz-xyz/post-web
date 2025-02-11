import { auth, signOut, onAuthStateChanged } from "../firebase.js"; 



document.addEventListener("DOMContentLoaded", () => {
    // console.log("hello ");
    
    let logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            signOut(auth)
                .then(() => {
                    Toastify({
                        text: "Logout successfully completed",
                        duration: 3000
                    }).showToast();

                    window.location.href = "../Login/index.html";
                })
                .catch((error) => {
                    Toastify({
                        text: "Logout Failed: " + error.message,
                        duration: 3000
                    }).showToast();
                });
        });
    } else {
        console.error("Logout button not found!");
    }
});

// Redirect to login if user is not authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../Login/index.html"; 
    }
});
