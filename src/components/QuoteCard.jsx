import React from "react";
import QuoteCard from "../components/QuoteCard"; // Componente que muestra cada frase individual
import Card from "../components/Card"; // Contenedor con estilo tipo tarjeta
import { QUOTES } from "../data/quotes"; // Datos con todas las frases
import { getFavorites, toggleFavorite } from "../utils/storage"; // Funciones para manejar favoritos (localStorage)

// Componente principal que muestra todas las frases
export default function Frases() {

  // useState guarda el listado de frases favoritas en memoria
  const [favs, setFavs] = React.useState(getFavorites());

  // useState para guardar el filtro seleccionado por categoría
  const [filtro, setFiltro] = React.useState("Todas");

  // Genera una lista con todas las categorías únicas desde los datos QUOTES
  const tags = ["Todas", ...Array.from(new Set(QUOTES.map(q => q.tag)))];

  // Filtra las frases según la categoría seleccionada
  const list = QUOTES.filter(q => (filtro === "Todas" ? true : q.tag === filtro));

  // Cambia el estado de favorito (agregar o quitar)
  const onToggleFav = (id) => {
    const next = toggleFavorite(id); // actualiza en localStorage
    setFavs(next);                   // actualiza el estado para refrescar la vista
  };

  return (
    <>
      {/* Título principal de la página */}
      <h2 className="mb-3">Frases</h2>

      {/* Tarjeta con el menú desplegable para filtrar categorías */}
      <Card title="Filtrar por categoría">
        <select
          className="form-select w-auto"
          value={filtro} // muestra el filtro actual
          onChange={(e) => setFiltro(e.target.value)} // cambia el filtro cuando el usuario selecciona otro
        >
          {tags.map(t => <option key={t}>{t}</option>)} {/* lista de opciones */}
        </select>
      </Card>

      {/* Recorre las frases y muestra una QuoteCard por cada una */}
      {list.map(q => (
        <QuoteCard
          key={q.id}                 // identificador único
          text={q.text}              // texto de la frase
          author={q.author}          // autor (si lo hay)
          tag={q.tag}                // categoría o tema
          isFavorite={favs.includes(q.id)} // verifica si está marcada como favorita
          onToggleFavorite={() => onToggleFav(q.id)} // función para marcar/desmarcar favorito
        />
      ))}
    </>
  );
}

