// src/components/Login.js

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";  // Importando o hook useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // Inicializando o hook de navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Tentativa de login com Firebase Authentication
      await signInWithEmailAndPassword(auth, email, senha);
      setError("");  // Limpar qualquer erro anterior
      navigate("/principal");  // Redireciona para a página Principal
    } catch (error) {
      console.error("Erro no login: ", error);
      setError("Usuário ou senha incorretos!");  // Mensagem de erro
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="E-mail" 
        />
        <input 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          placeholder="Senha" 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
