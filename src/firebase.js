// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importando o módulo de autenticação
import { getFirestore } from "firebase/firestore"; // Importando o módulo Firestore

// Configuração do Firebase (substitua pelas suas credenciais do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyBEjxsoaHRn4rB9cBv7SJN_KiqHa1jJpR0",
  authDomain: "desenvolvimento-web-84907.firebaseapp.com",
  projectId: "desenvolvimento-web-84907",
  storageBucket: "desenvolvimento-web-84907.firebasestorage.app",
  messagingSenderId: "438827041097",
  appId: "1:438827041097:web:663b27b60aaf9060f7da98",
  measurementId: "G-G6VT9KN1SR"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firebase Authentication e Firestore
const auth = getAuth(app); // Instância de autenticação
const db = getFirestore(app); // Instância do Firestore

export { auth, db }; // Exportar para ser usado em outros arquivos
export default app;