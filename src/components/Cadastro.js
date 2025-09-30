// src/components/Cadastro.js

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Conexão com Firebase
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";  // Hook de navegação

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [error, setError] = useState(""); // Erro para mostrar ao usuário
  const navigate = useNavigate();  // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Criação do usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Gravando dados adicionais no Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento
      });

      setError("");  // Limpar o erro caso o cadastro seja bem-sucedido
      navigate("/login");  // Redirecionar para a página de Login
    } catch (error) {
      console.error("Erro ao cadastrar o usuário: ", error);
      setError("Erro ao cadastrar o usuário!");  // Exibir erro para o usuário
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
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
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Nome" 
        />
        <input 
          type="text" 
          value={sobrenome} 
          onChange={(e) => setSobrenome(e.target.value)} 
          placeholder="Sobrenome" 
        />
        <input 
          type="date" 
          value={dataNascimento} 
          onChange={(e) => setDataNascimento(e.target.value)} 
          placeholder="Data de Nascimento" 
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
