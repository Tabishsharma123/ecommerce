import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyAY2sdWjbm7rM9EzwLRIKu3SDYFABpqhF4",
  authDomain: "vmart-ecommerce.firebaseapp.com",
  projectId: "vmart-ecommerce",
  storageBucket: "vmart-ecommerce.appspot.com",
  messagingSenderId: "567013252303",
  appId: "1:567013252303:web:23bac8f2964f80eaa7ebba"
});


export const auth = app.auth();
export default app;