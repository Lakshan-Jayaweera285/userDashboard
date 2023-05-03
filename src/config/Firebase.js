import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyD1f116A_xUuz3h-JuQ-JD2I2ryDtX8meI",
  authDomain: "weather-app-96599.firebaseapp.com",
  projectId: "weather-app-96599",
  storageBucket: "weather-app-96599.appspot.com",
  messagingSenderId: "670097278150",
  appId: "1:670097278150:web:b84a99bbb792f78efc03c7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();

