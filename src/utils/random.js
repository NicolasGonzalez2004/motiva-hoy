import { QUOTES } from "../data/quotes";

// Retorna una frase aleatoria; si pasas tag, filtra por categoría
export const randomQuote = (tag) => {
  const pool = tag ? QUOTES.filter(q => q.tag === tag) : QUOTES;
  if (!pool.length) return null;
  
  const selectedQuote = pool[Math.floor(Math.random() * pool.length)];
  
  // Crear un nuevo objeto para asegurar que React detecte el cambio
  return {
    id: selectedQuote.id,
    text: selectedQuote.text,
    author: selectedQuote.author,
    tag: selectedQuote.tag
  };
};