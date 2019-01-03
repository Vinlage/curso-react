import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyATX97Xm22XtB23skaMfRBX5sV_jzkLbUs",
  authDomain: "net-ninja-marioplan-d1de3.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-d1de3.firebaseio.com",
  projectId: "net-ninja-marioplan-d1de3",
  storageBucket: "net-ninja-marioplan-d1de3.appspot.com",
  messagingSenderId: "217601668164"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 