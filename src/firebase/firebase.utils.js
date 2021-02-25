import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD_FZh5pvryb0oL91Wsp1iBR3Y_bttpoYo",
  authDomain: "wecare-hospital-db.firebaseapp.com",
  projectId: "wecare-hospital-db",
  storageBucket: "wecare-hospital-db.appspot.com",
  messagingSenderId: "895763531458",
  appId: "1:895763531458:web:94120f0f5614e17686dd5b",
  measurementId: "G-RETPGLE8K8"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()