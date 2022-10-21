// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*
REACT_APP_apiKey=AIzaSyCwnz12I7GgrCpH77Diud6DxzgAeBr5S9w
REACT_APP_authDomain=dragon-news-b5430.firebaseapp.com
REACT_APP_projectId=dragon-news-b5430
REACT_APP_storageBucket=dragon-news-b5430.appspot.com
REACT_APP_messagingSenderId=1069498495031
REACT_APP_appId=1:1069498495031:web:aa94cf02df976291358fb2
*/


