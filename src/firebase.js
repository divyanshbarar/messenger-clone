import firebase from "firebase";

const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyAq0pNNIuNpuZ3PVOrbLR7b4iFPK8y0Nhk",
  authDomain: "messenger-1c38b.firebaseapp.com",
  projectId: "messenger-1c38b",
  storageBucket: "messenger-1c38b.appspot.com",
  messagingSenderId: "99293497727",
  appId: "1:99293497727:web:9c8b0a176e15329d85b24a",
  measurementId: "G-CLFN3V653T"
  
    }
);


const db=firebaseApp.firestore();

export default db;