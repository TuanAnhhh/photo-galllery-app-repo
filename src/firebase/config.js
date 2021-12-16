// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0NJDJ7CUpfXKq2P-AFUqBtkKWdjvs634",
  authDomain: "photo-gallery-app-1be69.firebaseapp.com",
  projectId: "photo-gallery-app-1be69",
  storageBucket: "photo-gallery-app-1be69.appspot.com",
  messagingSenderId: "301644910106",
  appId: "1:301644910106:web:7c3a8ba9adafb802ffcba3",
  measurementId: "G-74CZ9Q5VL1",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
