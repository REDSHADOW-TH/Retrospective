import firebase from 'firebase/app'
import 'firebase/firestore'
import packageJson from '../package.json'

firebase.initializeApp(packageJson.firebaseConfig)

const firestore = firebase.firestore()

export { firestore, firebase as default }