import React from "react";
import Card from "../components/Card"; // Componente reutilizable con estilo de tarjeta

// Componente funcional que muestra información sobre la aplicación
export default function Acerca() {
  return (
    <>
      {/* Título principal de la sección "Acerca" */}
      <h2 className="mb-3">Acerca</h2>

      {/* Uso del componente Card para mostrar un texto dentro de una tarjeta */}
      <Card title="Nuestra misión">
        {/* Contenido del interior de la tarjeta */}
        Compartir frases cortas que te ayuden a tomar acción y construir hábitos positivos cada día.
      </Card>
    </>
  );
}

