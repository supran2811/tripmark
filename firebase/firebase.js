
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBJPM4QjLcMSGN_17eRHCcRhHrct08guhM",
  authDomain: "triporg-1508486982436.firebaseapp.com",
  databaseURL: "https://triporg-1508486982436.firebaseio.com",
  projectId: "triporg-1508486982436",
  storageBucket: "triporg-1508486982436.appspot.com",
  messagingSenderId: "246403049091"
};

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const Auth = firebase.auth;

export { auth , Auth };