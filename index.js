// Import stylesheets
import './style.css';


import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import FriendlyEats from './FriendlyEats.js';
import './FriendlyEats.View.js';
import './FriendlyEats.Mock.js';
import './FriendlyEats.Data.js';

var firebaseConfig = {
    apiKey: "AIzaSyAzgWRiE1XEfdj1-ii9pUN1XdVLk6e5CbQ",
    authDomain: "myhost-e2163.firebaseapp.com",
    databaseURL: "https://myhost-e2163.firebaseio.com",
    projectId: "myhost-e2163",
    storageBucket: "myhost-e2163.appspot.com",
    messagingSenderId: "889751736452",
    appId: "1:889751736452:web:e33a0ee8a9a149a6ed32d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var app = new FriendlyEats();