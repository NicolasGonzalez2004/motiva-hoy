import { QUOTES } from "../data/quotes";

// Retorna una frase aleatoria; si pasas tag, filtra por categoría
export const randomQuote = (tag) => {
  const pool = tag ? QUOTES.filter(q => q.tag === tag) : QUOTES;
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
};
