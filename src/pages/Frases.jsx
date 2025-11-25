
import React from "react";
import QuoteCard from "../components/QuoteCard";
import Card from "../components/Card";
import { getFavorites, toggleFavorite } from "../utils/storage";
import { obtenerFrases } from "../services/frasesApi";

export default function Frases() {
  const [favs, setFavs] = React.useState(getFavorites());
  const [filtro, setFiltro] = React.useState("Todas");
  const [quotes, setQuotes] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  // Llamamos a la API de Express al cargar la página
  React.useEffect(() => {
    obtenerFrases()
      .then((data) => {
        // Adaptamos el formato del backend al que usa tu app
        // Backend: { id, frase, autor, fecha }
        // Front:   { id, text, author, tag }
        const apiQuotes = data.map((f) => ({
          id: f.id,
          text: f.frase,
          author: f.autor,
          tag: "Motivación", // categoría fija (para que funcione el filtro)
        }));
        setQuotes(apiQuotes);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error cargando frases:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando frases...</p>;
  }

  // Creamos categorías únicas desde las frases que vinieron del backend
  const tags = ["Todas", ...Array.from(new Set(quotes.map((q) => q.tag)))];

  // Aplicamos filtro según la categoría seleccionada
  const list =
    filtro === "Todas"
      ? quotes
      : quotes.filter((q) => q.tag === filtro);

  return (
    <>
      <h2 className="mb-3">Frases</h2>

      <Card title="Filtrar por categoría">
        <select
          className="form-select w-auto"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          {tags.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Card>

      {list.map((q) => (
        <QuoteCard
          key={q.id}
          text={q.text}
          author={q.author}
          liked={favs.includes(q.id)}
          onToggleLike={() => setFavs(toggleFavorite(q.id))}
        />
      ))}
    </>
  );
}


