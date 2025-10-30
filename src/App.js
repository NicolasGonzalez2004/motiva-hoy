import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frases from "./pages/Frases";
import Favoritos from "./pages/Favoritos";
import Contacto from "./pages/Contacto";
import Acerca from "./pages/Acerca";

export default function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-wrap gap-3 mb-4 border-bottom pb-2">
        <Link to="/" className="text-decoration-none fw-semibold text-primary">Inicio</Link>
        <Link to="/frases" className="text-decoration-none fw-semibold text-primary">Frases</Link>
        <Link to="/favoritos" className="text-decoration-none fw-semibold text-primary">Favoritos</Link>
        <Link to="/acerca" className="text-decoration-none fw-semibold text-primary">Acerca</Link>
        <Link to="/contacto" className="text-decoration-none fw-semibold text-primary">Contacto</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frases" element={<Frases />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

//Aca tengo declarado los links y las rutas , sacado de bootstrap