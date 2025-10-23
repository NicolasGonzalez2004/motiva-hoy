import React from "react";
import { Link, Routes, Route } from "react-router-dom"; // Herramientas para la navegación entre páginas
import Home from "./pages/Home";           // Página principal ("Motiva Hoy")
import Frases from "./pages/Frases";       // Página con todas las frases
import Favoritos from "./pages/Favoritos"; // Página con frases marcadas como favoritas
import Contacto from "./pages/Contacto";   // Página con formulario de contacto
import Acerca from "./pages/Acerca";       // Página "Acerca" (información de la app)

// Componente principal de la aplicación
export default function App() {
  return (
    <div className="container py-4">
      {/* ----- MENÚ SUPERIOR DE NAVEGACIÓN ----- */}
      <header className="d-flex flex-wrap gap-3 mb-4 border-bottom pb-2">
        {/* Enlaces de navegación: cambian de página sin recargar el sitio */}
        <Link to="/" className="text-decoration-none fw-semibold text-primary">Inicio</Link>
        <Link to="/frases" className="text-decoration-none fw-semibold text-primary">Frases</Link>
        <Link to="/favoritos" className="text-decoration-none fw-semibold text-primary">Favoritos</Link>
        <Link to="/acerca" className="text-decoration-none fw-semibold text-primary">Acerca</Link>
        <Link to="/contacto" className="text-decoration-none fw-semibold text-primary">Contacto</Link>
      </header>

      {/* ----- CONFIGURACIÓN DE RUTAS ----- */}
      <Routes>
        {/* Cada ruta indica qué componente se muestra según la URL */}
        <Route path="/" element={<Home />} />           {/* Página de inicio */}
        <Route path="/frases" element={<Frases />} />   {/* Lista de frases */}
        <Route path="/favoritos" element={<Favoritos />} /> {/* Frases guardadas */}
        <Route path="/acerca" element={<Acerca />} />   {/* Información del sitio */}
        <Route path="/contacto" element={<Contacto />} /> {/* Formulario de contacto */}
      </Routes>
    </div>
  );
}
