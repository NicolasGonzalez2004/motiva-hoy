import React from "react";
import QuoteCard from "../components/QuoteCard";
import Card from "../components/Card";
import { getFavorites, toggleFavorite } from "../utils/storage";
import { obtenerFrases } from "../services/frasesApi"; // función que llama a mi API Express

export default function Frases() {
  const [favs, setFavs] = React.useState(getFavorites()); // guardo ids de frases favoritas
  const [filtro, setFiltro] = React.useState("Todas");    // categoría seleccionada en el combo
  const [quotes, setQuotes] = React.useState([]);         // acá guardo las frases que vienen del backend
  const [cargando, setCargando] = React.useState(true);   // estado para mostrar "Cargando..."
  const [error, setError] = React.useState(null);         // estado para guardar mensaje de error

  React.useEffect(() => {
    // useEffect se ejecuta una vez al cargar la página
    obtenerFrases()                     // llamo a la API: GET http://localhost:3001/frases
      .then((data) => {
        console.log("Frases desde la API:", data); // solo para debug en consola

        // Transformo el formato del backend al formato que usa mi app
        const apiQuotes = data.map((f) => ({
          id: f.id,              // id viene del backend
          text: f.frase,         // "frase" del backend pasa a llamarse "text"
          author: f.autor,       // "autor" del backend pasa a "author"
          tag: "Motivación",     // por ahora dejo una sola categoría fija
        }));

        setQuotes(apiQuotes);    // guardo las frases transformadas en el estado
        setCargando(false);      // dejo de mostrar el "Cargando..."
      })
      .catch((err) => {
        console.error("Error cargando frases:", err);
        setError("No se pudieron cargar las frases desde la API 😢"); // mensaje para el usuario
        setCargando(false);
      });
  }, []); // [] significa que solo se ejecuta una vez al montar el componente

  if (cargando) return <p>Cargando frases...</p>; // mientras espero la respuesta de la API
  if (error) return <p>{error}</p>;              // si hubo error, lo muestro y no sigo

  // Si no llegaron frases desde el backend
  if (quotes.length === 0) {
    return (
      <>
        <h2 className="mb-3">Frases</h2>
        <p>No hay frases disponibles.</p>
      </>
    );
  }

  // Creo el listado de categorías únicas a partir de las frases
  const tags = ["Todas", ...Array.from(new Set(quotes.map((q) => q.tag)))];

  // Aplico el filtro seleccionado: si es "Todas" muestro todo, si no filtro por tag
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
          value={filtro}                       // valor actual del combo
          onChange={(e) => setFiltro(e.target.value)} // cuando cambia, actualizo el filtro
        >
          {tags.map((t) => (
            <option key={t}>{t}</option>       // pinto cada opción del select
          ))}
        </select>
      </Card>

      {list.map((q) => (                      // recorro la lista filtrada
        <QuoteCard
          key={q.id}                           // key única por React
          text={q.text}                        // texto de la frase
          author={q.author}                    // autor de la frase
          liked={favs.includes(q.id)}          // si el id está en favs, aparece como favorito
          onToggleLike={() => setFavs(toggleFavorite(q.id))} // agrega/saca de favoritos
        />
      ))}
    </>
  );
}
