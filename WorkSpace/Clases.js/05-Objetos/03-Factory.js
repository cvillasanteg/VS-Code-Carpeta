//let user = {
//    id: 1,
//    email: 'cvillasanteg@gmail.com',
//    name: 'Cristobal',
//    activo: true,
//    recuperarClave: function () {
//        console.log('Recuperando clave...')
//    },
//};

//let user1 = {
//    id: 2,
//    email: 'Porvenir@gmail.com',
//    name: 'Porvenir',
//    activo: false,
//    recuperarClave: function () {
//        console.log('Recuperando clave...')
//    },
//};

//Para no estar copiando y creando a cada rato usuarios nuevos se hace lo siguiente:

function crearUsuario(name, email) {
    return{
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...')
        },
    };
}

let user1 = crearUsuario('Cristobal', 'cvillasanteg@gmail.com');
let user2 = crearUsuario('Porvenir', 'Porvenir@gmail.com');

console.log (user1, user2);