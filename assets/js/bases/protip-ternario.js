const elMayor = (a ,b)=>( a > b ) ? a :b ;

const tieneMembresia = (miembro)=> (miembro) ? '2 Dolars' : '10 Dolars';

console.log(elMayor(20,8));

console.log(tieneMembresia(false));

//-----//

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr Strange',
    amigo ? 'Thor' : 'Loki',
    (()=> 'Juanpis'()),//funcion autoincovada
    elMayor(25,58),
];

console.log(amigosArr);

const nota = 91;
const grado =
                nota >= 95 ? 'A+' :
                nota >= 90 && nota < 95 ? 'A'  :
                nota < 90 &&  nota>= 85 ? 'B+' : 'F';

console.log({ nota ,grado});