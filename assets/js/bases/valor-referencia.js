let a = 10 ;
let b = a ;

a =30;

console.log(
    {a,b}
)

let juan = { nombre: 'Juan'};

let ana = { ...juan };//expret apunta diferente espacio en memoria
ana.nombre = 'Ana';

console.log(
    {juan, ana}
);

const cambiaNombre = ({ ...persona })=>{
    persona.nombre = 'Tony';
    return persona;
}

let maria = {nombre: 'Maria'};
let tony = cambiaNombre(maria);

console.log({ maria,tony });

//Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = [...frutas] ;
console.timeEnd('slice');

console.time('spred');
const otrasFrutas2 = frutas.slice() ;
console.timeEnd('spred');

otrasFrutas.push('Manguito');

console.table({ frutas , otrasFrutas, otrasFrutas2} );