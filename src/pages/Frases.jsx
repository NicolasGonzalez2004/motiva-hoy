import React from "react";
import QuoteCard from "../components/QuoteCard";
import Card from "../components/Card";
import { QUOTES } from "../data/quotes";
import { getFavorites, toggleFavorite } from "../utils/storage";

export default function Frases() {
  const [favs, setFavs] = React.useState(getFavorites());
  const [filtro, setFiltro] = React.useState("Todas");

  const tags = ["Todas", ...Array.from(new Set(QUOTES.map(q => q.tag)))];//esto me permite crear categorias unicas 
  const list = QUOTES.filter(q => filtro === "Todas" ? true : q.tag === filtro);

  return (
    <>
      <h2 className="mb-3">Frases</h2>

      <Card title="Filtrar por categoría">
        <select
          className="form-select w-auto"
          value={filtro}
          onChange={(e)=>setFiltro(e.target.value)} // actualiza la lista de frases 
        >
          {tags.map(t => <option key={t}>{t}</option>)}
        </select>
      </Card>

      {list.map(q => (    //Me recorre un arreglo , en este caso list 
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
//Primero importo lo que necesito y con useStates manejo favs y filtro.

