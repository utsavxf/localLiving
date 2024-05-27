// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD24jIpPml-_Mi5AAtIdHu3YUfA0tYpUgM",
    authDomain: "couch-surfer-cd5a8.firebaseapp.com",
    projectId: "couch-surfer-cd5a8",
    storageBucket: "couch-surfer-cd5a8.appspot.com",
    messagingSenderId: "706630897409",
    appId: "1:706630897409:web:11c8dd03e0ad966017d500"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(); 