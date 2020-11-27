import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
// import 'firebase/firestore';

import initializeFirebaseApp from "./FirebaseInitialization";


// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "certification-exam-quizzer-dev.firebaseapp.com",
  databaseURL: "https://certification-exam-quizzer-dev.firebaseio.com",
  projectId: "certification-exam-quizzer-dev",
  storageBucket: "certification-exam-quizzer-dev.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-M3QHNETP92"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.addEventListener('load', function () {
  initializeFirebaseApp();
});


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
