// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;

}
function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    let yenAmount = euroAmount * oneEuroIs["JPY"];
    return yenAmount;
}
function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    let poundAmount = euroAmount * oneEuroIs["GBP"];
    return poundAmount;
}

module.exports = { sum, fromEuroToDollar }