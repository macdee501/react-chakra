import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCzCCcrdSDZSXBSXYg2jyB8pPTXN47lN6E",
    authDomain: "liveauction-9864b.firebaseapp.com",
    databaseURL: "https://liveauction-9864b.firebaseio.com",
    projectId: "liveauction-9864b",
    storageBucket: "liveauction-9864b.appspot.com",
    messagingSenderId: "587625972192",
    appId: "1:587625972192:web:71195ddf6994641f04eb85",
    measurementId: "G-6RP6WQBNB0"
});

export default app;
