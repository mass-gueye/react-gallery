import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXSXMSU8Dq7uaFm-C6X5oh5S3oceWoNDs",
  authDomain: "gallery-45f7d.firebaseapp.com",
  projectId: "gallery-45f7d",
  storageBucket: "gallery-45f7d.appspot.com",
  messagingSenderId: "860586427463",
  appId: "1:860586427463:web:26980d108a705ab04c5d62",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const storage = getStorage();
