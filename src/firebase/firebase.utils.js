import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAyXVdVOg_1oZqnvQOf1Y76bcmh_J6YGv4",
    authDomain: "crown-ecommerce-7c816.firebaseapp.com",
    projectId: "crown-ecommerce-7c816",
    storageBucket: "crown-ecommerce-7c816.appspot.com",
    messagingSenderId: "198699164607",
    appId: "1:198699164607:web:0a92df12f444a486b6370a",
    measurementId: "G-TMTX68JE7Z"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;