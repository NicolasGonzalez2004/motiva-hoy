import React from "react";
import Button from "./Button.jsx";

// Tarjeta que muestra una frase + autor y botón de favorito
export default function QuoteCard({ text, author, liked=false, onToggleLike }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className="mb-3">“{text}”</p>
          <footer className="blockquote-footer">
            {author || "Anónimo"}
          </footer>
        </blockquote>

        {onToggleLike && (
          <div className="mt-3">
            <Button onClick={onToggleLike} variant={liked ? "warning" : "outline-secondary"}>
              {liked ? "★ Favorito" : "☆ Favorito"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
//Recibe text, author , tag, isFav,onToggleFav