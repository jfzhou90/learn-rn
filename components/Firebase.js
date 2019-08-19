import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFv-P2k2YZoCLqmFBXVDzWRwWwOKd9Ccc",
  authDomain: "learn-rn-81235.firebaseapp.com",
  databaseURL: "https://learn-rn.firebaseio.com",
  storageBucket: "learn-rn.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;