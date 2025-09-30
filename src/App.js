// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Cadastro from "./components/Cadastro"; 
import Login from "./components/Login";        
import Principal from "./components/Principal"; 
import Home from "./components/Home";         // Página Home
import Sobre from "./components/Sobre";       // Página Sobre
import NotFound from "./components/NotFound"; // Página 404
import './App.css'; // Estilo global

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/cadastro">Cadastro</Link> | 
            <Link to="/login">Login</Link> | 
            <Link to="/sobre">Sobre</Link>
          </nav>
          <h1>Bem-vindo ao Firebase App!</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />             
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/login" element={<Login />} />       
          <Route path="/principal" element={<Principal />} /> 
          <Route path="/sobre" element={<Sobre />} />       
          <Route path="*" element={<NotFound />} />  {/* Página 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
