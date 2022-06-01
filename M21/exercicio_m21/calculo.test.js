const {soma, dobro} = require('./codigo');

describe("funções matemáticas", () => {
  it("soma de dois valores", () => {
    expect(soma(2, 5)).toBe(7);
    expect(soma(10, 5)).toBe(15);
  });

  it('dobro de um valor', () => {
    expect(dobro(4)).toBe(8);
  });
});