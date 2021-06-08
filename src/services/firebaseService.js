import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBOD0hCo0j2hc4gf4Ncr74cCiJ7WpZxRUc",
    authDomain: "project7aagain.firebaseapp.com",
    projectId: "project7aagain",
    storageBucket: "project7aagain.appspot.com",
    messagingSenderId: "340115369431",
    appId: "1:340115369431:web:bccdeff7c7cdd65c9cef92"
  };

firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotificaton(){
    Notification.requestPermission().then((permission) => 
    {console.log(permission)
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  console.log("Tokken");
                    console.log("Tokken => " ,currentToken );
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}