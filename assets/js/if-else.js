let a = 10;

if( a => 10 ){// undefine , null ,una asignacion
    console.log('mayor a 10');
}else{
    console.log('menor a 10');
}

//console.log('Fin programa');

const hoy = new Date();// object

console.log( hoy);

let dia = hoy.getDate();//0 domingo 

console.log(dia , typeof(dia));

if( dia === 26 ){
    console.log('Domingo');
}else if( dia === 1 ){
    console.log('Lunes');
}else{
    console.log('No es');
}