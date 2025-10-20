import { randomQuote } from "../src/utils/random";

describe("randomQuote", () => {
  it("retorna una frase no nula con propiedades básicas", () => {
    const q = randomQuote();
    expect(q).not.toBeNull();
    expect(typeof q.text).toBe("string");
    expect(q.text.length).toBeGreaterThan(0);
  });
});
