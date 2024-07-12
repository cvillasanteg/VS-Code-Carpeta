let user= {
    id: 1,
    name: 'Cristobal',
    edad: 33,
};
for (let prop in user) {
    console.log (prop, user[prop]);
};

let animales = ['chanchito feliz', 'dragon', 'caballo'];
for(let indice in animales) {
    console.log (indice, animales[indice]);
}