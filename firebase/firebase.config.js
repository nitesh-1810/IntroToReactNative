// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpMOmvX5oauEQsi8zanhHypKCfUn6TEwY",
  authDomain: "first-react-native-app1810.firebaseapp.com",
  projectId: "first-react-native-app1810",
  storageBucket: "first-react-native-app1810.appspot.com",
  messagingSenderId: "1021557959682",
  appId: "1:1021557959682:web:d62951d21b6f80ef7f0b1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
