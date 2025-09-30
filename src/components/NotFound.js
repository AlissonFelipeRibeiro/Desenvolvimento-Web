// src/components/NotFound.js

import React from "react";
import "./NotFound.css"; // Vamos criar o CSS mais tarde

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>404</h2>
      <p>Página Não Encontrada</p>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
};

export default NotFound;
