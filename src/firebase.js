// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqWq1kcSEIgjGaMXJfn4ze2pm2NTB_LXk",
    authDomain: "whatsapp-clone-fa4d6.firebaseapp.com",
    projectId: "whatsapp-clone-fa4d6",
    storageBucket: "whatsapp-clone-fa4d6.appspot.com",
    messagingSenderId: "902491452621",
    appId: "1:902491452621:web:c73be3a2cee96fd62e2584",
    measurementId: "G-ZPJ70HEXXR"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;