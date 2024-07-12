/**
 * Crear algoritmo que tome array de objetos y devuelva arrays de pares
 */
let pairs = [
    [1, {name: "Cristobal"}],
    [2, {name: "Nacha"}],
    [3, {name: "Porvenir"}],
];

let array = [{
    id: 1,
    name: 'Cristobal',
}, {
    id: 2,
    name: 'Nacha',
}, {
    id: 3,
    name: 'Porvenir'
}];

function toCollection(arr) {
    let collection = [];
    for(idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}
let resultado = toCollection(pairs);
console.log (resultado);