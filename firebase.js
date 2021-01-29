import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBQbkD9qCEZbD-BrVWaK5eSJ-sHIVmWFgg",
    authDomain: "scheduler-c2e1d.firebaseapp.com",
    databaseURL: "https://scheduler-c2e1d-default-rtdb.firebaseio.com",
    projectId: "scheduler-c2e1d",
    storageBucket: "scheduler-c2e1d.appspot.com",
    messagingSenderId: "720976773753",
    appId: "1:720976773753:web:ee3695610578a65afa0aa8",
    measurementId: "G-TVGVLGFE5L"
};

firebase.initializeApp(firebaseConfig);

export { firebase };