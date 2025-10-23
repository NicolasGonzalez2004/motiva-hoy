import React from "react";
import QuoteCard from "../components/QuoteCard"; // Muestra cada frase con su autor y botón de "me gusta"
import Card from "../components/Card";           // Tarjeta contenedora con estilo
import { QUOTES } from "../data/quotes";         // Archivo con todas las frases y sus categorías
import { getFavorites, toggleFavorite } from "../utils/storage"; // Funciones para guardar y leer favoritos

// Componente principal que muestra las frases motivacionales
export default function Frases() {

  // Estado que guarda los IDs de las frases favoritas (obtenidos desde localStorage)
  const [favs, setFavs] = React.useState(getFavorites());

  // Estado para guardar el filtro seleccionado por categoría
  const [filtro, setFiltro] = React.useState("Todas");

  // Crea un arreglo con todas las categorías únicas (tags) + la opción "Todas"
  const tags = ["Todas", ...Array.from(new Set(QUOTES.map(q => q.tag)))];

  // Filtra las frases según la categoría seleccionada
  const list = QUOTES.filter(q => filtro === "Todas" ? true : q.tag === filtro);

  return (
    <>
      {/* Título principal de la página */}
      <h2 className="mb-3">Frases</h2>

      {/* Tarjeta que contiene el menú desplegable para filtrar por categoría */}
      <Card title="Filtrar por categoría">
        <select
          className="form-select w-auto"
          value={filtro} // Muestra el filtro actual
          onChange={(e)=>setFiltro(e.target.value)} // Cambia el filtro al seleccionar otro
        >
          {tags.map(t => <option key={t}>{t}</option>)} {/* Genera cada opción del menú */}
        </select>
      </Card>

      {/* Recorre las frases filtradas y muestra una QuoteCard por cada una */}
      {list.map(q => (
        <QuoteCard
          key={q.id}                      // Identificador único para cada frase
          text={q.text}                   // Texto principal de la frase
          author={q.author}               // Autor de la frase
          liked={favs.includes(q.id)}     // Marca la frase como favorita si está en la lista
          onToggleLike={() => setFavs(toggleFavorite(q.id))} // Cambia el estado al hacer clic en "me gusta"
        />
      ))}
    </>
  );
}
