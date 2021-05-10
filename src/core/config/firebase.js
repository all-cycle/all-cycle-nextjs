import firebase from "firebase/app";
import "firebase/auth";

const {
  API_KEY,
  AUTH_DOMAIN,
  PJT_ID,
  STORAGE_BUCKET,
  MSG_SENDER_ID,
  APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PJT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MSG_SENDER_ID,
  appId: APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
