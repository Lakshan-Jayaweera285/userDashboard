import firebase from "firebase";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyAiVJzsmcIyF_3djeUGiN-tAEZi_quTarQ",
  authDomain: "competitive-virtual-cycling.firebaseapp.com",
  projectId: "competitive-virtual-cycling",
  storageBucket: "competitive-virtual-cycling.appspot.com",
  messagingSenderId: "751663427874",
  appId: "1:751663427874:web:453ab9854b1b8ce1f6357b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();

