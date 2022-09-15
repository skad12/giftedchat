import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD7PXh0ir5-HfDK4244PKjN3sEuUeeXDek",
    authDomain: "gifted-chat-4d1b0.firebaseapp.com",
    projectId: "gifted-chat-4d1b0",
    storageBucket: "gifted-chat-4d1b0.appspot.com",
    messagingSenderId: "1017786313532",
    appId: "1:1017786313532:web:c0dcb7f73728827ac78c39"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const db = app.firebase();
const auth = firebase.auth();
export {db,auth};

