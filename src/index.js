import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

// Firebase configuration
const firebaseConfig = {
    apiKey: "INSERT_API_KEY_HERE",
    authDomain: "your-domain.firebaseapp.com",
    databaseURL: "https://your-domain.firebaseio.com",
    projectId: "your-domain",
    storageBucket: "your-domain.appspot.com",
    messagingSenderId: "Random-numbers",
    appId: "Random-key"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// If you want your app to work offline and load faster, you can change
serviceWorker.unregister();

