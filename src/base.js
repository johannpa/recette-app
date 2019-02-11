import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDA3xcb1j8mswKuiLU55IZTA672OcaGC1w",
  authDomain: "recette-app-4918f.firebaseapp.com",
  databaseURL: "https://recette-app-4918f.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
