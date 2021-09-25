import firebase from 'firebase';
require('@firebase/firestore')


 var firebaseConfig = {
    apiKey: "AIzaSyC9L3HUVOy5mkJzHzMdo6H4h8yKx9uWSB4",
    authDomain: "ncert-app-95d2b.firebaseapp.com",
    projectId: "ncert-app-95d2b",
    storageBucket: "ncert-app-95d2b.appspot.com",
    messagingSenderId: "885758190358",
    appId: "1:885758190358:web:4365897b92abe068582637"
  };
// Initialize Firebase


if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig); 
  }

export default firebase.firestore();

