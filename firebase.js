// Import the functions you need from the SDKs you need
// import * as firabase from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD39zBAL8LwHhFljpSWGTablw5IE0ZpePU",
//   authDomain: "firabase-auth-fb215.firebaseapp.com",
//   projectId: "firabase-auth-fb215",
//   storageBucket: "firabase-auth-fb215.appspot.com",
//   messagingSenderId: "712001564101",
//   appId: "1:712001564101:web:b70aa35448c0883b802fac"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// let app;
// if (firabase.apps.lenght === 0) {
//   app = firabase.initializeApp(firebaseConfig);
// } else {
//   app = firabase.app();
// }

// const auth = firabase.auth();

// export { auth };
// Import the functions you need from the SDKs you need


import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore'
// import * as firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, onSnapshot, query, where, collection, getDocs } from 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD39zBAL8LwHhFljpSWGTablw5IE0ZpePU",
  authDomain: "firabase-auth-fb215.firebaseapp.com", 
  projectId: "firabase-auth-fb215",
  storageBucket: "firabase-auth-fb215.appspot.com",
  messagingSenderId: "712001564101",
  appId: "1:712001564101:web:b70aa35448c0883b802fac"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = getFirestore();

export {auth,db};
