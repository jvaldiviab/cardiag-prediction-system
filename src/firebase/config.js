import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

require('dotenv').config()

const firebaseConfig = {
	apiKey: "AIzaSyDEgmFUgTJ_PiQLnIeCrgKI3DJLIT9mHsE",
	authDomain: "cardiag-prediction-system.firebaseapp.com",
	projectId: "cardiag-prediction-system",
	storageBucket: "cardiag-prediction-system.appspot.com",
	messagingSenderId: "700999425759",
	appId: "1:700999425759:web:e217d1e13c09e9e95ad36a"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }