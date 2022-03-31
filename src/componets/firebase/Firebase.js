import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCGg0zLoExMjs2bu6Z4WV3twa_I6W5OwqU",
  authDomain: "dashboard-83027.firebaseapp.com",
  projectId: "dashboard-83027",
  storageBucket: "dashboard-83027.appspot.com",
  messagingSenderId: "608532614875",
  appId: "1:608532614875:web:8372d640002b82874806fe",
  measurementId: "G-L15MY4YN1L"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };



