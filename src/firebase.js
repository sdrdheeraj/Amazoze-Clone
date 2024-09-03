import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_CxIC809mq_shOKwxQn02vbQbULdcGF4",
  authDomain: "clone-6073b.firebaseapp.com",
  projectId: "clone-6073b",
  storageBucket: "clone-6073b.appspot.com",
  messagingSenderId: "63563198021",
  appId: "1:63563198021:web:9641e906c9ed5bf0bcfd2c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};
