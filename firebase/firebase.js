import firebase from "firebase";

const config = {
  apiKey: process.env._FIREBASE_API_KEY,
  authDomain: process.env._FIREBASE_DOMAIN_NAME,
  databaseURL: process.env._FIREBASE_DATABASE_URL,
  projectId: process.env._FIREBASE_PROJECT_ID,
  storageBucket: "triporg-1508486982436.appspot.com",
  messagingSenderId: "246403049091"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const Auth = firebase.auth;

export { auth, Auth };
