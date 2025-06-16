// Tasas de conversión desde 1 Euro
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// De Euro a Dólar
function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

// De Dólar a Yen
function fromDollarToYen(dollarAmount) {
    // Primero convertimos de dólares a euros
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    // Luego de euros a yenes
    return euroAmount * oneEuroIs["JPY"];
}

// De Yen a Libra
function fromYenToPound(yenAmount) {
    // Primero convertimos de yenes a euros
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    // Luego de euros a libras
    return euroAmount * oneEuroIs["GBP"];
}

// Exportamos las funciones
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
