// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando React Router
import Cadastro from "./components/Cadastro";  // Importando a página Cadastro
import Login from "./components/Login";        // Importando a página Login
import Principal from "./components/Principal"; // Importando a página Principal

import './App.css'; // Se você tiver um arquivo de estilos

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bem-vindo ao Firebase App!</h1>
        </header>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
          <Route path="/principal" element={<Principal userUid="ID_DO_USUARIO" />} /> {/* Página Principal */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;