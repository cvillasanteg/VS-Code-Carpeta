/**
 * Crear algoritmo que tome array de objetos y devuelva arrays de pares
 */
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

let pares = [
    [1, { id: 1, name:'Cristobal'}],
    [2, { id: 2, name: 'Nacha'}],
    [3, { id: 3, name: 'Porvenir'}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento]
    }
    return pairs;
}
let resultado = toPairs(array);
console.log (resultado);