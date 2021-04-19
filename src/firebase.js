import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDXWJl_DbWvgRtdrr8dGKSYZ6HzT6Dnrac",
    authDomain: "clone-react-c9f31.firebaseapp.com",
    projectId: "clone-react-c9f31",
    storageBucket: "clone-react-c9f31.appspot.com",
    messagingSenderId: "912561483195",
    appId: "1:912561483195:web:9a1090b28bdb15bc8e289e",
    measurementId: "G-FRJ60KFBKD"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}