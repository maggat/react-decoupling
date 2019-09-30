import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apikey: "AIzaSyCzeurcYpL9kO-7KNJwk7BtFd15duoxmXw",
    authDomain: "decoupling-9c63f.firebaseapp.com",
    databaseURL: "https://decoupling-9c63f.firebaseio.com",
    projectid: "decoupling-9c63f",
    storageBucket: "decoupling-9c63f.appspot.com",
    messagingSenderId: "464995185006",
    appId: "1: 464995185006: web: e0f9dd43801a87203b117f",
    measurementId: "G-C4CBCH0N4M",
}; 

firebase.initializeApp(config);

const db = firebase.database();

export {
    db,
};
