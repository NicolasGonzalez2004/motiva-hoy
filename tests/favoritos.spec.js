import { getFavorites, toggleFavorite } from "../src/utils/storage";

describe("Favoritos (localStorage)", () => {
  beforeEach(() => localStorage.clear());

  it("agrega y quita un id correctamente", () => {
    expect(getFavorites()).toEqual([]);
    toggleFavorite(2);
    expect(getFavorites()).toEqual([2]);
    toggleFavorite(2);
    expect(getFavorites()).toEqual([]);
  });
});
