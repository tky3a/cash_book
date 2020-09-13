import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGDtinTEVz0-xqDSQP8_TMgfoHY-FEzTg",
  authDomain: "cash-book-c3ee4.firebaseapp.com",
  databaseURL: "https://cash-book-c3ee4.firebaseio.com",
  projectId: "cash-book-c3ee4",
  storageBucket: "cash-book-c3ee4.appspot.com",
  messagingSenderId: "804803873096",
  appId: "1:804803873096:web:6bddc8ee5a3f8f9a63cb7d",
  measurementId: "G-QG6YMYDC7S",
};

firebase.initializeApp(firebaseConfig);

// ユーザ登録
export const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      if (user) {
        console.log("Success to SignUp");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

// メール＆パスワードでログイン
export const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      alert("Login Success!");
    })
    .catch((e) => {
      alert(e);
    });
};

export default firebase;
