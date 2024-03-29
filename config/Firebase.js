import firebase from 'firebase';
import { useState } from 'react';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth(); 

export const logout = async (setEmail, setPassword) => {
  try {
    await auth.signOut();
    setEmail(""); 
    setPassword("");
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
};

export default firebase;
