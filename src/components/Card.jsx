import React from "react";

// Contenedor con estilo "card" de Bootstrap
export default function Card({ title, children }) {
  return (
    <div className="card shadow-sm border-0 mb-3">
      {title && <div className="card-header bg-white fw-semibold">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
}

