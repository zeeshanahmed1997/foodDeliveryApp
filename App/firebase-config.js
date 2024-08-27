// Import the functions you need from the SDKs you need
import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNUTMvND9GrKu2BLDhRZIlaOHc-zZtu7o",
    authDomain: "expensemanagement-rcp436.firebaseapp.com",
    databaseURL: "https://expensemanagement-rcp436-default-rtdb.firebaseio.com",
    projectId: "expensemanagement-rcp436",
    storageBucket: "expensemanagement-rcp436.appspot.com",
    messagingSenderId: "566481948342",
    appId: "1:566481948342:web:fc50ac2ff09681996f2017",
    measurementId: "G-NSFPJ19MG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth, database };