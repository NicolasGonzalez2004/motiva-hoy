import React from "react";
import Card from "../components/Card";
import QuoteCard from "../components/QuoteCard";
import Button from "../components/Button.jsx";
import { randomQuote } from "../utils/random";

export default function Home() {
  const [quote, setQuote] = React.useState(() => randomQuote());
  return (
    <>
      <h2 className="mb-3">Motiva Hoy</h2>
      <Card title="Frase del día">
        {quote && <QuoteCard text={quote.text} author={quote.author} />}
        <Button variant="primary" onClick={() => setQuote(randomQuote())} >
          Otra frase
        </Button>
      </Card>
    </>
  );
}

