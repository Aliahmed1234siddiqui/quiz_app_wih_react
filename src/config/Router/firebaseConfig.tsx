// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD818nZShyHYcnCxpoWFW20vtfK2Y5md5A",
  authDomain: "quizapp-react-7bfc8.firebaseapp.com",
  databaseURL: "https://quizapp-react-7bfc8-default-rtdb.firebaseio.com",
  projectId: "quizapp-react-7bfc8",
  storageBucket: "quizapp-react-7bfc8.appspot.com",
  messagingSenderId: "23088185997",
  appId: "1:23088185997:web:c9e2c67f390af836a0d8c4",
  measurementId: "G-D47RWC8VH1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)