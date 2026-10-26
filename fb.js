// Firebase: loaded separately so the app still works offline or if this fails to load.
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signOut,sendPasswordResetEmail,sendEmailVerification} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {initializeFirestore,persistentLocalCache,persistentMultipleTabManager,memoryLocalCache,collection,doc,onSnapshot,writeBatch,getDoc,getDocs,terminate,clearIndexedDbPersistence} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
const firebaseConfig={
  apiKey:"AIzaSyC0G0ie-T2FtV2EBZLUx7XiHefGVfh9kLU",
  authDomain:"kalenteri-d392d.firebaseapp.com",
  projectId:"kalenteri-d392d",
  storageBucket:"kalenteri-d392d.firebasestorage.app",
  messagingSenderId:"156753489346",
  appId:"1:156753489346:web:4c92dece40985c2c547a5b"
};
const app=initializeApp(firebaseConfig);
const auth=getAuth(app);auth.languageCode='fi';
let db;
try{db=initializeFirestore(app,{localCache:persistentLocalCache({tabManager:persistentMultipleTabManager()})})}
catch(e){db=initializeFirestore(app,{localCache:memoryLocalCache()})}
window.FB={auth,db,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signOut,sendPasswordResetEmail,sendEmailVerification,
  collection,doc,onSnapshot,writeBatch,getDoc,getDocs,terminate,clearIndexedDbPersistence};
window.dispatchEvent(new Event('fb-ready'));
