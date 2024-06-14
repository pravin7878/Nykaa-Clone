import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD0NsGpz4cnTnjj8XmTO4Ogi_KRnk4fLXI",
  authDomain: "nykaa-clone-pk.firebaseapp.com",
  projectId: "nykaa-clone-pk",
  storageBucket: "nykaa-clone-pk.appspot.com",
  messagingSenderId: "325317232486",
  appId: "1:325317232486:web:2f0e79012b33757368aaa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app )