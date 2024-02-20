let juegos = ['Zelda','Mario B','figting force','Mega']

console.log('Largo:' , juegos.length);

let primero = juegos[0]
let ultimo = juegos[juegos.length-1];

console.log(primero , ultimo);

juegos.forEach( (element , indice,arr)=>{
    console.log({ element,indice,arr })
} );

let nuevalongi = juegos.push('Formula 1');

console.log(nuevalongi , juegos);

nuevaLongi = juegos.unshift('Fire Emblem');

console.log( {nuevalongi , juegos} )

juegoBorrado = juegos.pop();

console.log( {juegoBorrado , juegos} );

let pos = 1;

juegosBorrados  = juegos.splice(pos , 2);

console.log( {juegosBorrados , juegos} )

let metroidIndex = juegos.indexOf('Mega');//CaseSensitiVE

console.log(metroidIndex);