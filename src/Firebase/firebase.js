import firebase from 'firebase/app';
import 'firebase/firestore';
import  {apiPass ,authDomainPass , databaseURLPass, projectIdPass, storageBucketPass,messagingSenderIdPass } from './credentials'
const config = {
  apiKey: apiPass,
  authDomain: authDomainPass,
  databaseURL: databaseURLPass,
  projectId: projectIdPass,
  storageBucket: storageBucketPass,
  messagingSenderId: messagingSenderIdPass
};

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
