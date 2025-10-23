import React from "react";
import Card from "../components/Card";              // Contenedor con estilo tipo tarjeta
import QuoteCard from "../components/QuoteCard";    // Muestra la frase y el autor
import Button from "../components/Button.jsx";      // Botón reutilizable con estilos
import { randomQuote } from "../utils/random";      // Función que elige una frase aleatoria

// Componente principal de la página de inicio
export default function Home() {

  // Estado que guarda la frase actual mostrada en pantalla
  // Se inicializa con una frase aleatoria al cargar el componente
  const [quote, setQuote] = React.useState(() => randomQuote());
  
  // Función que obtiene una nueva frase aleatoria al presionar el botón
  const handleNewQuote = () => {
    const newQuote = randomQuote();
    setQuote(newQuote); // actualiza la frase mostrada
  };
  
  return (
    <>
      {/* Título principal de la página */}
      <h2 className="mb-3">Motiva Hoy</h2>

      {/* Tarjeta que contiene la frase del día y el botón para cambiarla */}
      <Card title="Frase del día">
        {/* Muestra la frase solo si existe */}
        {quote && (
          <QuoteCard 
            key={quote.id}      // identificador único
            text={quote.text}   // texto de la frase
            author={quote.author} // autor
          />
        )}

        {/* Botón que cambia la frase cuando se presiona */}
        <Button 
          variant="primary" 
          onClick={handleNewQuote} // llama a la función para generar nueva frase
        >
          Otra frase
        </Button>
      </Card>
    </>
  );
}
