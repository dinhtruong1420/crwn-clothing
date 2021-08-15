import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config =
{
  apiKey: 'AIzaSyDQmCwXow92FKYHXmCtW2U1ebXXNoyLxfk',
  authDomain: 'crwn-db-66c5d.firebaseapp.com',
  projectId: 'crwn-db-66c5d',
  storageBucket: 'crwn-db-66c5d.appspot.com',
  messagingSenderId: '443133115649',
  appId: '1:443133115649:web:cc32df460194c04c2cef00',
  measurementId: 'G-17T48SKLFQ'
}
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
