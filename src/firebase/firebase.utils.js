import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAD83sz0D7zEdZvMyWW_NxwUBrkvnbt8HE",
  authDomain: "crwn-db-2d553.firebaseapp.com",
  projectId: "crwn-db-2d553",
  storageBucket: "crwn-db-2d553.appspot.com",
  messagingSenderId: "740784753982",
  appId: "1:740784753982:web:82abf6fe723518a308f06f",
  measurementId: "G-7FY08S98Q7"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
