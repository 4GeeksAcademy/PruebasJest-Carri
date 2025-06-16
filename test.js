const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba 1: Euro a Dólar
test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba 2: Dólar a Yen
test("One dollar should be approximately 146.26 yen", () => {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected, 2); // Usamos toBeCloseTo por decimales
});

// Prueba 3: Yen a Libra
test("156.5 yen should be 0.87 pounds", () => {
    const pounds = fromYenToPound(156.5);
    const expected = (156.5 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2);
});
