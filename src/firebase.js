import firebase from 'firebase'

const Config = {
    apiKey: "AIzaSyCM4A6BGqt87JdIUjyZWAoiBUnLT3I0yf8",
    authDomain: "reactwithfirebase-9dab9.firebaseapp.com",
    databaseURL: "https://reactwithfirebase-9dab9.firebaseio.com",
    projectId: "reactwithfirebase-9dab9",
    storageBucket: "reactwithfirebase-9dab9.appspot.com",
    messagingSenderId: "980353424125",
    appId: "1:980353424125:web:4e6439a2bd3e9da2573c94",
    measurementId: "G-17QMJ371P0"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  firebase.analytics();

export default firebase