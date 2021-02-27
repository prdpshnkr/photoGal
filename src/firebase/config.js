import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAL_nMJ1jkQBHjd13fuF6tgN0jPK-6Curk",
  authDomain: "photogal-278cc.firebaseapp.com",
  projectId: "photogal-278cc",
  storageBucket: "photogal-278cc.appspot.com",
  messagingSenderId: "160548907673",
  appId: "1:160548907673:web:b4b9bb16759b06f318e608",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { fire, projectStorage, projectFireStore, timeStamp };
