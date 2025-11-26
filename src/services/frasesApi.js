// src/services/frasesApi.js
const API_URL = 'http://localhost:3001'; // URL de mi backend Express

export async function obtenerFrases() {
  const resp = await fetch(`${API_URL}/frases`);

  if (!resp.ok) {
    throw new Error(`Error HTTP ${resp.status}`);
  }

  return resp.json(); // acá viene el array de frases
}
