import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Amplify, {Storage} from 'aws-amplify';
import config from './aws-exports';
import awsExports from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSLVUMdP-T7PO2wRgJnkPNAV5Z4Ex8Ggw",
    authDomain: "personal-website-2ed16.firebaseapp.com",
    databaseURL: "https://personal-website-2ed16.firebaseio.com",
    projectId: "personal-website-2ed16",
    storageBucket: "personal-website-2ed16.appspot.com",
    messagingSenderId: "214964570165",
    appId: "1:214964570165:web:e283104ed3cf521e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

/*Amplify.configure(awsExports);
Amplify.configure(config);
Storage.configure(config);*/




// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// If you want your app to work offline and load faster, you can change
serviceWorker.unregister();

