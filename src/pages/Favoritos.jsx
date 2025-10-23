import React from "react";
import { QUOTES } from "../data/quotes";                // Importa las frases desde el archivo de datos
import { getFavorites, toggleFavorite } from "../utils/storage"; // Funciones para leer/actualizar favoritos en localStorage
import QuoteCard from "../components/QuoteCard";        // Componente que muestra cada frase

// Componente que muestra todas las frases marcadas como favoritas
export default function Favoritos() {

  // Estado local: guarda los IDs de frases favoritas
  const [favs, setFavs] = React.useState(getFavorites());

  // Filtra las frases para mostrar solo las que están en la lista de favoritos
  const list = QUOTES.filter(q => favs.includes(q.id));

  return (
    <>
      {/* Título principal de la página */}
      <h2 className="mb-3">Favoritos</h2>

      {/* Si no hay frases favoritas, muestra un mensaje en gris */}
      {list.length === 0 && (
        <p className="text-muted">Aún no tienes frases guardadas.</p>
      )}

      {/* Recorre las frases favoritas y las muestra con el componente QuoteCard */}
      {list.map(q => (
        <QuoteCard
          key={q.id}                 // identificador único para React
          text={q.text}              // texto de la frase
          author={q.author}          // autor
          liked                      // prop que indica que está marcada como favorita
          onToggleLike={() => setFavs(toggleFavorite(q.id))} // acción para quitarla o volver a marcarla
        />
      ))}
    </>
  );
}


