const API_URL = 'http://localhost:3001';

export async function obtenerFrases() {
  const resp = await fetch(`${API_URL}/frases`);
  if (!resp.ok) {
    throw new Error('Error al obtener frases');
  }
  return resp.json();
}
