//Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = "16";

// Ahora veremos los PAR LLAVES-VALOR (EJ: llave o propiedad = nombre y valor="Tanjiro")
let personaje = {
    nombre: "Tanjiro", 
    anime: "Demon Slayer", 
    edad: "16",
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//para modificar una propiedad
personaje.edad = 13; // esto es en caso de saber que propiedad vamos a combiar (mas comun)

let llave = edad;
personaje ['llave'] = 16; // esto es en caso de no saber que propiedad vamos a modificar

//para eliminar una propiedad (EJ: eliminar anime)

delete personaje.anime;
console.log(personaje);
 