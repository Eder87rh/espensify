import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCv6kg4L-Vr9La6AN8i9j1pVrKkckwuqAk",
  authDomain: "expensify-7f1f2.firebaseapp.com",
  databaseURL: "https://expensify-7f1f2.firebaseio.com",
  projectId: "expensify-7f1f2",
  storageBucket: "expensify-7f1f2.appspot.com",
  messagingSenderId: "98134136556",
  appId: "1:98134136556:web:a536c15cf8dfe9f229b7c9",
  measurementId: "G-NZH58GTDQJ"
};

firebase.initializeApp(firebaseConfig);

/* const database = firebase.database();

database.ref().set({
  name: 'Eder Ramírez',
  age: 26,
  isSingle: false,
  location: {
    city: 'Lazaro',
    country: 'Mexico'
  }
})

database.ref('age').set({
  age: 27
}) */