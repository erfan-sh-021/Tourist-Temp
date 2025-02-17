import {initializeApp} from 'firebase/app' ;
import {getAuth} from 'firebase/auth'; 
import {getDatabase , ref , get} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBvcDGRYuqyh3mRQ7Yb5z6kz8fd8LqEgWM",
    authDomain: "gardeshgary-a752b.firebaseapp.com",
    projectId: "gardeshgary-a752b",
    storageBucket: "gardeshgary-a752b.firebasestorage.app",
    messagingSenderId: "580113953192",
    appId: "1:580113953192:web:3244092d7f77098647ed9d",
}
const app = initializeApp(firebaseConfig);

export const getDataFromFirebase = async () =>{
    const db = getDatabase();
    const dataRef = ref(db , 'hotel');
    
    try{
        const snapshot = await get(dataRef);
        if(snapshot.exists()){
            return snapshot.val();
        }else{
            console.log('no data available');
            return null;
        }
    }catch(error){
        console.error("Error reading data from Firebase:", error);
    }
}
export const auth = getAuth(app); 
export default app;

 