
const carros = ['Mazda','Honda','Toyota','Ford'];

let i= 0;
// while( i <carros.length ){
//     console.log( carros[i] );
//     i++;
// }

while( carros[i] ){
    if (i ===1){
        i++;
    }break;
    console.log( carros[i] );
    i++;
}

console.warn('Do while');
 
let j=0;
do{
    console.log( carros[j]);
    j++
}while( carros[j]);
//son consideradas falsas
//undefine
//null
//false 