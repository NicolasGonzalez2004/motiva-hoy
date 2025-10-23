// Clave usada para guardar los favoritos en el almacenamiento local del navegador
const KEY = "favQuotes";

// --- Función para obtener la lista de favoritos ---
export const getFavorites = () => {
  try {
    // Intenta leer los favoritos guardados y convertirlos de texto a arreglo
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    // Si ocurre un error o no hay nada guardado, devuelve un arreglo vacío
    return [];
  }
};

// --- Función para agregar o quitar una frase de los favoritos ---
export const toggleFavorite = (id) => {
  // Crea un conjunto (Set) con los IDs actuales de favoritos
  const set = new Set(getFavorites());

  // Si el ID ya está guardado, lo elimina; si no, lo agrega
  set.has(id) ? set.delete(id) : set.add(id);

  // Convierte el conjunto de nuevo a un arreglo
  const arr = Array.from(set);

  // Guarda la lista actualizada en localStorage (como texto)
  localStorage.setItem(KEY, JSON.stringify(arr));

  // Devuelve la lista actualizada de favoritos
  return arr;
};

// --- Función para verificar si una frase está en favoritos ---
export const isFavorite = (id) => getFavorites().includes(id);
