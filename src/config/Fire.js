import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC424KdZuA9ZOOMqG1YD39q-8izXcbh5uE",
    authDomain: "examenfinal-c19e8.firebaseapp.com",
    databaseURL: "https://examenfinal-c19e8.firebaseio.com",
    projectId: "examenfinal-c19e8",
    storageBucket: "examenfinal-c19e8.appspot.com",
    messagingSenderId: "149344965015"


};
const fire = firebase.initializeApp(config);
export default fire; 