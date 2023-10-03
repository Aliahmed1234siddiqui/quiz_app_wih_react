// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHO8Huurc8fQInME_y4gnfeeohkVFTLgc",
  authDomain: "quiz-react-3d68b.firebaseapp.com",
  databaseURL: "https://quiz-react-3d68b-default-rtdb.firebaseio.com",
  projectId: "quiz-react-3d68b",
  storageBucket: "quiz-react-3d68b.appspot.com",
  messagingSenderId: "711753674265",
  appId: "1:711753674265:web:43b7a6315250ad10778488",
  measurementId: "G-R0RQYR1QVC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);