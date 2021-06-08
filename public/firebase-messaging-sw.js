importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBOD0hCo0j2hc4gf4Ncr74cCiJ7WpZxRUc",
    authDomain: "project7aagain.firebaseapp.com",
    projectId: "project7aagain",
    storageBucket: "project7aagain.appspot.com",
    messagingSenderId: "340115369431",
    appId: "1:340115369431:web:bccdeff7c7cdd65c9cef92"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();