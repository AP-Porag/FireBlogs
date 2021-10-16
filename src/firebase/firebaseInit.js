import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDQ5QyHnT8AGej08nqFFVPVcEqYS2k3DU",
    authDomain: "fireblogs-e731b.firebaseapp.com",
    projectId: "fireblogs-e731b",
    storageBucket: "fireblogs-e731b.appspot.com",
    messagingSenderId: "880441199554",
    appId: "1:880441199554:web:00f8a65bb1872818eba45b"
};

//initializing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {timestamp};
export default firebaseApp.firestore();
