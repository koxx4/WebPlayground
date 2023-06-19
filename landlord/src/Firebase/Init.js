// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBEMnb1ELGfqY4Oyz2gq6q3XYFsqDPuSzw',
	authDomain: 'lab5-877a0.firebaseapp.com',
	projectId: 'lab5-877a0',
	storageBucket: 'lab5-877a0.appspot.com',
	messagingSenderId: '373084970765',
	appId: '1:373084970765:web:da35a5e6180fb879705a44',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
