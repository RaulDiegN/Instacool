import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDwYKEQRGZ9nEpniOVlJLVLT8OuIcgwz6M",
  authDomain: "instacool-8fd1a.firebaseapp.com",
  databaseURL: "https://instacool-8fd1a.firebaseio.com",
  projectId: "instacool-8fd1a",
  storageBucket: "instacool-8fd1a.appspot.com",
  messagingSenderId: "932927565791",
  appId: "1:932927565791:web:6ba25ae7f4a0d57dcb1e6a",
  measurementId: "G-5YSSL84NZ2"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()


export const auth = firebase.auth()
export const db = firestore
export const storage = firebase.storage()

