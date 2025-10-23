import React from "react";
import Card from "../components/Card";      // Componente con estilo de tarjeta (contenedor visual)
import Button from "../components/Button.jsx"; // Botón reutilizable con estilos personalizados

// Componente funcional que muestra un pequeño formulario de contacto
export default function Contacto() {

  // Función que se ejecuta al enviar el formulario (muestra un mensaje)
  const enviar = () => alert("Formulario enviado :)");

  return (
    <>
      {/* Título principal de la página */}
      <h2 className="mb-3">Contacto</h2>

      {/* Card sirve como contenedor visual para el formulario */}
      <Card title="Escríbenos">

        {/* Formulario de contacto */}
        <form
          className="mt-2"
          onSubmit={(e) => { 
            e.preventDefault(); // Evita que la página se recargue
            enviar();           // Llama a la función que muestra el alert
          }}
        >

          {/* Campo de texto para el nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input 
              className="form-control" 
              placeholder="Tu nombre" 
              required // hace obligatorio llenar el campo
            />
          </div>

          {/* Campo de texto para el correo electrónico */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              className="form-control" 
              type="email" 
              placeholder="tu@email.com" 
              required // valida que sea un email válido
            />
          </div>

          {/* Botón para enviar el formulario */}
          <Button type="submit" variant="success">Enviar</Button>
        </form>
      </Card>
    </>
  );
}


