import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaE8NhEms7gGoxGtHDABia1lCWHYz3q7U",
    authDomain: "clarify-data.firebaseapp.com",
    projectId: "clarify-data",
    storageBucket: "clarify-data.appspot.com",
    messagingSenderId: "291179106900",
    appId: "1:291179106900:web:3b2bc02f37b0c26ab793c1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth , firestore};
