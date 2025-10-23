import React from "react";
import { QUOTES } from "../data/quotes";
import { getFavorites, toggleFavorite } from "../utils/storage";
import QuoteCard from "../components/QuoteCard";

export default function Favoritos() {
  const [favs, setFavs] = React.useState(getFavorites());
  const list = QUOTES.filter(q => favs.includes(q.id));

  return (
    <>
      <h2 className="mb-3">Favoritos</h2>
      {list.length === 0 && <p className="text-muted">Aún no tienes frases guardadas.</p>}
      {list.map(q => (
        <QuoteCard
          key={q.id}
          text={q.text}
          author={q.author}
          liked
          onToggleLike={() => setFavs(toggleFavorite(q.id))}
        />
      ))}
    </>
  );
}

