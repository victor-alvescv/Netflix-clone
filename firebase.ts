import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD94jRzdwOYj6wU0XxfRaCU9bJ-_5vCfk",
  authDomain: "netflix-clone-ae439.firebaseapp.com",
  projectId: "netflix-clone-ae439",
  storageBucket: "netflix-clone-ae439.appspot.com",
  messagingSenderId: "982348529902",
  appId: "1:982348529902:web:ff441a4e72e792abb9b3ff"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }