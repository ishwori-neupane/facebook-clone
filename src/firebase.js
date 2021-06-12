import firebase from 'firebase'
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX9lk9vqexOFnEndx6ElUQKBsIBc8onp4",
  authDomain: "facebook-clone-dbae6.firebaseapp.com",
  databaseURL: "https://facebook-clone-dbae6.firebaseio.com",
  projectId: "facebook-clone-dbae6",
  storageBucket: "facebook-clone-dbae6.appspot.com",
  messagingSenderId: "502508564915",
  appId: "1:502508564915:web:b19e2c8871728b5cb05bc6",
  measurementId: "G-XD7W4SF6K0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;