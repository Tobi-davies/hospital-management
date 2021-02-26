import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_FZh5pvryb0oL91Wsp1iBR3Y_bttpoYo",
  authDomain: "wecare-hospital-db.firebaseapp.com",
  projectId: "wecare-hospital-db",
  storageBucket: "wecare-hospital-db.appspot.com",
  messagingSenderId: "895763531458",
  appId: "1:895763531458:web:94120f0f5614e17686dd5b",
  measurementId: "G-RETPGLE8K8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot.data());

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

// export const getcurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//       unsubscribe();
//       resolve(userAuth);
//     }, reject);
//   });
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
