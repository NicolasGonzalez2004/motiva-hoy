import React from "react";

// Botón Bootstrap reutilizable

export default function Button({ children, onClick, type = "button", variant = "primary" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} fw-semibold px-3 py-2`}
    >
      {children}
    </button>
  );
}
