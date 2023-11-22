// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getAuth,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const provider = new GoogleAuthProvider();

const signInG = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            if (result) {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Verification email sent successfully");
                    });
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'index.html';
            }
            // const user = result.user;
            // console.log(user);
            show.innerHTML += `
      <h1>Welcome ${user.displayName}</h1>
      <p>Here is your google account ${user.email}</p>
      <img src=${user.photoURL} alt="profile pic" />
      `
        })
        .catch(() => { })
}

window.signInG = signInG