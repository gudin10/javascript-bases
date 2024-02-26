const personaje = {
    nombre : 'Juanito',
    codeName : 9898,
    vivo : false ,
    edad : 28,
    coords : {
        lat : 34.32,
        long : -98.3
    },
    trajes : ['Mark I','Kika nietto','Siute'],
    direccion : {
        zip : '9000, 11',
        ubicacion : 'Norte bogota',
        largo : [1,2,3],
    },
    'ultima-pelicula' : 'Infinity War'
}; //si miran las llaves es objeto

//console.log('Nombre: ', personaje.nombre);

console.log(personaje['codeName']);
console.log(personaje.nombre);
console.log(personaje.edad);
console.log(personaje.direccion.ubicacion);

console.log('# Trajes ironman : ', personaje.trajes.length)

console.log('# Trajes ironman : ', personaje.trajes[personaje.trajes.length-1])

const x = 'vivo'

console.log('Vivo' , personaje[x] );

console.log('Ultima pelicula' , personaje["ultima-pelicula"] );
//Mas detalles

delete personaje.edad ; 

console.log(personaje);

personaje.casado = true ; 

const entriePAres = Object.entries(personaje);
console.log(entriePAres);

console.log(personaje);

Object.freeze(personaje);
personaje.dinero = 25000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa de Marfil';// solo afecta al objeto los que esten dentro no

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades);
console.log(valores);


