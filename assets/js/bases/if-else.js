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
const diaLetras = {
    0: 'lunes',
    1: 'martes',
    2: 'miercoles',
    3: 'jueves',
    4: 'viernes',
    5:'sabado',
    6:'domingo'
}
const diaLetras2 = ['lunes',
'martes','miercoles','jueves','viernes','sabado','domingo'];

dia = 33;
console.log(diaLetras[dia] || 'Dia no definido');

//sin usar else if o swithc