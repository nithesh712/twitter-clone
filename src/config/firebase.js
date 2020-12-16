import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCN0kVVMUFHDgq_vKot90abWNqkCs60oZc",
  authDomain: "twitter-clone-2ad06.firebaseapp.com",
  databaseURL: "https://twitter-clone-2ad06.firebaseio.com",
  projectId: "twitter-clone-2ad06",
  storageBucket: "twitter-clone-2ad06.appspot.com",
  messagingSenderId: "241139514645",
  appId: "1:241139514645:web:e835e92b7b66528e3abd1c",
  measurementId: "G-KT7PHCSLY2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
