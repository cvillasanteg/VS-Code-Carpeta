/**
 * indice validar que no sea menor a cero y el elemento existe en el arrays
 */
function getByIdx(arr, idx) {
    if (idx<0) {
        return 'Elemento no existe';
    }
    if (arr.length < idx) {
        return 'Elemento no existe';
    }
    return arr[idx];
}
let resultado = getByIdx([1, 2],1);
console.log (resultado);