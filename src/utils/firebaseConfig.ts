import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

//2
const firebaseConfig = {
  apiKey: "AIzaSyBsDfX9Q-Q-A3xRe0XKAB_udyvlau6fCZo",
  authDomain: "zoom-appp.firebaseapp.com",
  projectId: "zoom-appp",
  storageBucket: "zoom-appp.appspot.com",
  messagingSenderId: "565643727325",
  appId: "1:565643727325:web:256d785b5b60b605c92634",
  measurementId: "G-Q44YV57NLK"
};
//1
// const firebaseConfig = {
//   apiKey: "AIzaSyBgkbr72z7FzLAMhe1lZ_vGBKlLVthZuqw",
//   authDomain: "zoom-ap.firebaseapp.com",
//   projectId: "zoom-ap",
//   storageBucket: "zoom-ap.appspot.com",
//   messagingSenderId: "324567699786",
//   appId: "1:324567699786:web:3742ad92228440fe0e71b3",
//   measurementId: "G-Y9QTFSKGNQ"
// };
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");