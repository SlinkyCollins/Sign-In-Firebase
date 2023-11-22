// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7K36q2y2w-HQDFTHxQlCP_B-k_twx8hg",
    authDomain: "sign-in-firebase-716a2.firebaseapp.com",
    projectId: "sign-in-firebase-716a2",
    storageBucket: "sign-in-firebase-716a2.appspot.com",
    messagingSenderId: "397437441705",
    appId: "1:397437441705:web:261c4ec36b36f62853fbb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

const signInGit = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            if (error.code === 'auth/account-exists-with-different-credential') {
                // Handle the situation where the user has an existing account with a different provider
                // You might want to provide options for the user to sign in with their existing credentials
                // console.log("Account exists with a different credential");
            } else {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                alert("Authentication failed. Please try again.");
                window.location.href = "index.html";
            }
        });
};


window.signInGit = signInGit;
