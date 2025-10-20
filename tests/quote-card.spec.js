import React from "react";
import { render, screen } from "@testing-library/react";
import QuoteCard from "../src/components/QuoteCard.jsx";

describe("QuoteCard", () => {
  it("muestra texto y autor", () => {
    render(<QuoteCard text="Sigue adelante" author="Kobe Bryant" />);
    expect(screen.getByText(/Sigue adelante/i)).toBeTruthy();
   expect(screen.getByText(/Kobe Bryant/i)).toBeTruthy();
  });
});
