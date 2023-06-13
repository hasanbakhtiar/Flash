import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyB0rNEHq42Ul5v3gXKAtKsFZa6Jbv8WkvU",
    authDomain: "flash-c0d6f.firebaseapp.com",
    databaseURL: "https://flash-c0d6f-default-rtdb.firebaseio.com",
    projectId: "flash-c0d6f",
    storageBucket: "flash-c0d6f.appspot.com",
    messagingSenderId: "802982629664",
    appId: "1:802982629664:web:4a63ac484339775b288745"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}