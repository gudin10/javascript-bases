const heroes = [
    'batman',
    'superman',
    'mujer maravilla',
    'aquaman',
]

console.warn('For tradicional');

for( let i= 0 ; i < heroes.length ; i++){
    console.log( heroes[i] );
}

console.log('for in');

for( let i in heroes){
    console.log(heroes[i]);
}

console.log('For of');

for (let heroe of heroes){
    console.log( {heroe} );
}




