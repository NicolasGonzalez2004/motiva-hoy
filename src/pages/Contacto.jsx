import React from "react";
import Card from "../components/Card";
import Button from "../components/Button.jsx";

export default function Contacto() {
  const enviar = () => alert("Formulario enviado :)");
  return (
    <>
      <h2 className="mb-3">Contacto</h2>
      <Card title="Escríbenos">
        <form
          className="mt-2"
          onSubmit={(e)=>{ e.preventDefault(); enviar(); }}
        >
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input className="form-control" placeholder="Tu nombre" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="tu@email.com" required />
          </div>

          <Button type="submit" variant="success">Enviar</Button>
        </form>
      </Card>
    </>
  );
}
//pagina informativas simples
