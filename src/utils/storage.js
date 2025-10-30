// Guarda/lee IDs de frases favoritas en localStorage
const KEY = "favQuotes";

export const getFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

export const toggleFavorite = (id) => {
  const set = new Set(getFavorites());
  set.has(id) ? set.delete(id) : set.add(id);
  const arr = Array.from(set);
  localStorage.setItem(KEY, JSON.stringify(arr));
  return arr; // devolvemos la lista actualizada
};

export const isFavorite = (id) => getFavorites().includes(id);

//Esta es la capa de persistencia que guarda datos para que no se pierdan cuando se cierra o recarga la aplicacion
//getFavorites()--> Devuelve array de IDs favoritos
//toggleFavorite(id)--> agrega/quita id y guarda  