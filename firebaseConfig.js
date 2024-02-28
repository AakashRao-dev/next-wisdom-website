// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-Y3P01RG1DeTsh3CQGedR9tLTAz-Cd34',
  authDomain: 'nextjs-coaching-website.firebaseapp.com',
  projectId: 'nextjs-coaching-website',
  storageBucket: 'nextjs-coaching-website.appspot.com',
  messagingSenderId: '155842533502',
  appId: '1:155842533502:web:23b178e4f828bfc87ee02f',
  measurementId: 'G-82CTJWM0ZK',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
