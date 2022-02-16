import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGfuA6Jnc7G9_IJRl9hDNpiBeGIk5pogA',
  authDomain: 'cooking-ninja-site-64bfa.firebaseapp.com',
  projectId: 'cooking-ninja-site-64bfa',
  storageBucket: 'cooking-ninja-site-64bfa.appspot.com',
  messagingSenderId: '409436972258',
  appId: '1:409436972258:web:201313c24c45fb51fd6abb',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export {projectFirestore};
