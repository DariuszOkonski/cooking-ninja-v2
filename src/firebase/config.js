// Cooking Ninja Site v2
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1IXpt5pYo6PlxJwMvROpRjyraEXi7-2Y",
    authDomain: "cooking-ninja-site-v2.firebaseapp.com",
    projectId: "cooking-ninja-site-v2",
    storageBucket: "cooking-ninja-site-v2.appspot.com",
    messagingSenderId: "21650820430",
    appId: "1:21650820430:web:767970ccdd6140be50621f"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export {
    projectFirestore,
    projectAuth
}