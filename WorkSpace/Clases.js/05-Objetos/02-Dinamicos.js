const user = { id: 1 }; //En este caso al ser constante no le puedo cambiar el valor (1) a otro, pero si podemos darle otras propiedad como en este caso.

user.name = 'Cristobal';
user.guardar = function(){
    console.log('Guardando', user.name);
}


user.guardar ();

//Tambien podemos borrar propiedades, como por ejemplo:
delete user.name;
delete user.guardar;
console.log(user);

//const user1 = object.freeze({id: 1 }); // Esto es para que no se pueda modificar por ningun motivo nuestro objeto.
//const user1 = object.seal({id: 1 }); // Esto es para que sus valores si puedan cambiar.
//user1.name = 'Cristobal';
//console.log(user1);